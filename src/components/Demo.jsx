import React, { useEffect, useState, useRef, useContext } from "react";
import { copy, linkIcon, loader, tick } from "../assets"; // Adjust this based on your asset paths
import { useLazyGetSummaryQuery } from "../services/article";
import CreditContext from "../contexts/CreditContext";
import { jsPDF } from "jspdf";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs"; // Import React Icons
import {
  FaChevronRight,
  FaCopy,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaCheck,
  FaShare,
  FaLink,
} from "react-icons/fa"; // Import Twitter and Facebook icons
import { FaXTwitter } from "react-icons/fa6";
import ShareModal from "./ShareModal/ShareModal";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

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
      // Check if article.summary is defined
      if (!article.summary) {
        console.error("No summary available in article object.");
        return;
      }

      // Create a new Document
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

      // Generate the blob
      const blob = await Packer.toBlob(doc);

      // Use FileSaver to save the Blob as a file
      saveAs(blob, "summary.docx");
    } catch (error) {
      console.error("Error creating DOC:", error);
    }
  };

  console.log("Article summary:", article.summary);
  //console.log("Buffer length:", buffer.byteLength);

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
    const speechChunks = article.summary.match(/.{1,200}/g); // Split summary into chunks of 200 characters

    const speakChunk = (index) => {
      if (index >= speechChunks.length) {
        setIsSpeaking(false);
        return;
      }

      const chunk = speechChunks[index];
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = selectedLanguage;
      utterance.onend = () => {
        speakChunk(index + 1); // Speak next chunk after current one ends
      };

      window.speechSynthesis.speak(utterance);

      if (index === 0) {
        setIsSpeaking(true); // Set speaking state to true when starting to speak
      }
    };

    if (!isSpeaking) {
      speakChunk(0); // Start speaking from the first chunk
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Function to calculate reading time
  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = text.split(" ").length;
    const minutes = words / wordsPerMinute;
    const readingTime = Math.ceil(minutes);
    return readingTime;
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [article, setArticle] = useState({ url: "", summary: "" });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const readingTime = calculateReadingTime(article.summary);

  return (
    <section className="mt-16 w-full max-w-4xl mx-auto px-4">
      <div className="flex flex-col w-full gap-4">
        {/* Search */}
        <form
          className="relative flex justify-center items-center shadow-lg p-4 rounded-lg bg-white dark:bg-[#1e293b]"
          onSubmit={handleSubmit}
        >
          <FaLink size={22} className="text-blue-500 dark:text-white mr-2" />
          <input
            type="url"
            placeholder="Paste the article link"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="w-full p-2 border dark:text-white border-gray-300 rounded-lg focus:outline-none focus:border-blue-500  dark:bg-[#2d3c53] "
          />
          <button
            type="submit"
            className="ml-2 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
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
            className="px-2 py-1 dark:bg-[#1e293b] border dark:text-gray-200 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 cursor-pointer "
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
          className="mt-4 px-4 py-2 bg-blue-500 dark:bg-[#1e293b] w-fit text-white font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
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
                className="flex items-center p-2 bg-gray-200 dark:bg-[#384966] dark:text-white shadow-md rounded-lg cursor-pointer hover:bg-gray-300"
              >
                <div className=" mr-2" onClick={() => handleCopy(item.url)}>
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
                className="flex flex-col gap-4 p-4  shadow-lg rounded-lg w-full dark:bg-[#1e293b] bg-blue-100"
              >
                <div className="flex justify-between items-start">
                  <h2 className="font-satoshi font-bold text-lg sm:text-xl dark:text-[#5BD1D7]">
                    Article <span className="blue_gradient">Summary</span>
                  </h2>

                  <div className="flex items-center justify-center">
                    <div
                      className=" mr-4 text-blue-500 dark:text-gray-300"
                      onClick={() => handleCopySummary(article.summary)}
                    >
                      {copiedSummary ? (
                        <FaCheck size={18} />
                      ) : (
                        <FaCopy className="cursor-pointer" size={18} />
                      )}
                    </div>
                    <button
                      onClick={handleOpenModal}
                      className="  text-blue-500 dark:text-gray-300"
                    >
                      <FaShare size={18} />
                    </button>
                  </div>
                </div>
                <div className="summary_box ">
                  <p className="font-inter font-medium text-sm text-gray-700  dark:text-gray-200">
                    {article.summary}
                  </p>
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Estimated reading time: {readingTime} minute(s)
                </div>

                <ShareModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  article={article}
                />

                <div className="flex items-center justify-between">
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={handleTextToSpeech}
                      className={`p-2 ${
                        isSpeaking ? "bg-[#ffb39f] " : "bg-blue-500"
                      } text-white rounded-lg hover:bg-blue-600  ${
                        isSpeaking
                          ? "focus:ring-red-500"
                          : "focus:ring-blue-500"
                      } focus:ring-opacity-50`}
                    >
                      {isSpeaking ? (
                        <BsFillStopFill className="w-4 h-4" /> // Stop icon
                      ) : (
                        <BsFillPlayFill className="w-4 h-4" /> // Play icon
                      )}
                    </button>
                  </div>

                  <div className="relative">
                    <div className="">
                      <button
                        onClick={toggleDropdown}
                        className="font-medium rounded-lg gap-1 hover:text-blue-700 text-blue-500 dark:text-gray-300 flex items-center"
                      >
                        <FaDownload size={20} />
                        {isDropdownOpen ? (
                          <FaChevronUp size={15} />
                        ) : (
                          <FaChevronDown size={15} />
                        )}
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white  dark:bg-[#3c4b63] ring-1 ring-black ring-opacity-5 z-10">
                          <div className="py-1">
                            <button
                              onClick={downloadPDF}
                              className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-200  dark:text-white hover:text-blue-900 w-full text-left flex items-center gap-2"
                            >
                              <FaDownload size={16} />
                              Download as PDF
                            </button>
                            <button
                              onClick={downloadDOC}
                              className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-200  dark:text-white hover:text-blue-900 w-full text-left flex items-center gap-2 "
                            >
                              <FaDownload size={16} />
                              Download as DOC
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
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
