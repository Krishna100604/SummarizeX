import React, { useEffect, useState, useRef, useContext } from "react";
import { copy, linkIcon, loader, tick } from "../assets"; // Adjust this based on your asset paths
import { useLazyGetSummaryQuery } from "../services/article";
import CreditContext from "../contexts/CreditContext";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs"; // Import React Icons
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaChevronRight,
} from "react-icons/fa"; // Import Twitter and Facebook icons
import { FaXTwitter } from "react-icons/fa6";

const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [creditExceeded, setCreditExceeded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language
  const [isSpeaking, setIsSpeaking] = useState(false); // Track if TTS is currently speaking

  const { credits, updateCredits } = useContext(CreditContext);
  const [getSummary, { error }] = useLazyGetSummaryQuery();
  const summaryRef = useRef(null);
  const ttsUtterance = useRef(null); // Ref for the TTS utterance

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (shouldScroll && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
      setShouldScroll(false);
    }
  }, [shouldScroll]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (credits <= 0) {
        setCreditExceeded(true);
        return;
      }

      setLoading(true);

      const { data } = await getSummary({
        articleUrl: article.url,
        language: selectedLanguage,
      });

      if (data?.summary) {
        const newArticle = { ...article, summary: data.summary };
        const updatedAllArticles = [newArticle, ...allArticles];

        setArticle(newArticle);
        setAllArticles(updatedAllArticles);

        localStorage.setItem("articles", JSON.stringify(updatedAllArticles));

        updateCredits(credits - 1); // Deduct one credit
        setShouldScroll(true);

        // Speak the summary immediately after fetching
        speakSummary(newArticle.summary);
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(true);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCopySummary = (summary) => {
    setCopiedSummary(true);
    navigator.clipboard.writeText(summary);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const splitText = doc.splitTextToSize(article.summary, 180);
    doc.text(splitText, 10, 10);
    doc.save("summary.pdf");
  };

  const downloadDOC = async () => {
    try {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [new TextRun(article.summary)],
              }),
            ],
          },
        ],
      });

      const buffer = await Packer.toBuffer(doc);
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      saveAs(blob, "summary.docx");
    } catch (error) {
      console.error("Error creating DOC:", error);
    }
  };

  // Function to handle language change
  const handleLanguageChange = async (language) => {
    setSelectedLanguage(language);
    // Refetch summary when language changes
    try {
      setLoading(true);
      const { data } = await getSummary({ articleUrl: article.url, language });
      if (data?.summary) {
        setArticle({ ...article, summary: data.summary });
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle text-to-speech
  const handleTextToSpeech = () => {
    if (!isSpeaking) {
      ttsUtterance.current = new SpeechSynthesisUtterance(article.summary);
      ttsUtterance.current.lang = selectedLanguage;
      ttsUtterance.current.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(ttsUtterance.current);
      setIsSpeaking(true);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Function to handle sharing on Twitter
  const shareOnTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      article.summary
    )}&url=${encodeURIComponent(article.url)}`;
    window.open(tweetUrl, "_blank");
  };

  // Function to handle sharing on Facebook
  const shareOnFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      article.url
    )}&quote=${encodeURIComponent(article.summary)}`;
    window.open(fbUrl, "_blank");
  };
  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      article.summary
    )}%20${encodeURIComponent(article.url)}`;
    window.open(whatsappUrl, "_blank");
  };
  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      article.url
    )}&title=${encodeURIComponent(article.summary)}`;
    window.open(linkedinUrl, "_blank");
  };
  return (
    <section className="mt-16 w-full max-w-4xl mx-auto px-4">
      <div className="flex flex-col w-full gap-4">
        {/* Search */}
        <form
          className="relative flex justify-center items-center shadow-lg p-4 rounded-lg bg-white  dark:bg-gray-500"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-6 w-6 h-6"
          />
          <input
            type="url"
            placeholder="Paste the article link"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-500  dark:text-black"
          />
          <button
            type="submit"
            className="ml-2 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <FaChevronRight size={17} />
          </button>
        </form>

        {/* Language Selection */}
        <div className="flex items-center gap-2 mt-4 text-md md:text-lg font-semibold  dark:text-gray-400">
          <label htmlFor="languageSelect" className="font-medium">
            Select Language:
          </label>
          <select
            id="languageSelect"
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="px-2 py-1 dark:bg-gray-500 border dark:text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 cursor-pointer"
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="hi">Hindi</option>
            <option value="gu">Gujarati</option>
            <option value="mr">Marathi</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="mt-4 px-4 py-2 bg-blue-500 dark:bg-gray-500 text-white font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          {showHistory ? "Hide History" : "Show History"}
        </button>

        {/* Browse URL history */}
        {showHistory && (
          <div className="flex flex-col gap-2 max-h-60 overflow-y-auto mt-4">
            {allArticles.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="flex items-center p-2 bg-gray-200 shadow-md rounded-lg cursor-pointer hover:bg-gray-300"
              >
                <div
                  className="copy_btn mr-2"
                  onClick={() => handleCopy(item.url)}
                >
                  <img
                    src={copied ? tick : copy}
                    alt="copy_icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <p className="text-sm truncate">{item.url}</p>
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        <div className="my-10 max-w-full flex justify-center">
          {isLoading ? (
            <img
              src={loader}
              alt="loader"
              className="w-20 h-20 object-contain"
            />
          ) : error ? (
            <p className="text-md md:text-lg font-semibold font-inter  dark:text-gray-400 text-center">
              This isn't supposed to happen..
              <br />
              <span className="text-red-500">{error?.data?.error}</span>
            </p>
          ) : (
            article.summary &&
            !creditExceeded && (
              <div
                ref={summaryRef}
                className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg w-full"
              >
                <div className="flex justify-between items-start">
                  <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                    Article <span className="blue_gradient">Summary</span>
                  </h2>
                  <div
                    className="copy_btn ml-4"
                    onClick={() => handleCopySummary(article.summary)}
                  >
                    <img
                      src={copiedSummary ? tick : copy}
                      alt="copy_icon"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
                <div className="summary_box">
                  <p className="font-inter font-medium text-sm text-gray-700">
                    {article.summary}
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={downloadPDF}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Download as PDF
                  </button>
                  <button
                    onClick={downloadDOC}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  >
                    Download as DOC
                  </button>
                  <button
                    onClick={handleTextToSpeech}
                    className={`px-4 py-2 ${
                      isSpeaking ? "bg-red-500" : "bg-blue-500"
                    } text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 ${
                      isSpeaking ? "focus:ring-red-500" : "focus:ring-blue-500"
                    } focus:ring-opacity-50`}
                  >
                    {isSpeaking ? (
                      <BsFillStopFill className="w-6 h-6" /> // Stop icon
                    ) : (
                      <BsFillPlayFill className="w-6 h-6" /> // Play icon
                    )}
                  </button>
                </div>
                {/* Social Media Sharing Buttons */}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={shareOnTwitter}
                    className="px-4 py-2 bg-black
                     text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <FaXTwitter className="w-6 h-6" /> Share on Twitter
                  </button>
                  <button
                    onClick={shareOnFacebook}
                    className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <FaFacebook className="w-6 h-6" /> Share on Facebook
                  </button>
                  {/* Add more share buttons as needed */}
                  <button
                    onClick={shareOnWhatsApp}
                    className="px-3 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    <FaWhatsapp className="w-5 h-5" /> Share on WhatsApp
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="px-3 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <FaLinkedin className="w-5 h-5" /> Share on LinkedIn
                  </button>
                </div>
              </div>
            )
          )}
          {/* Credit Exceeded Warning */}
          {creditExceeded && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
              <strong className="font-bold">Warning!</strong>
              <span className="block sm:inline">
                {" "}
                You have exhausted your free credits. Please purchase credits to
                continue.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;
