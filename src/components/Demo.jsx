// Demo.js
import React, { useEffect, useState, useRef, useContext } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';
import CreditContext from '../contexts/CreditContext';

const Demo = () => {
  const [article, setArticle] = useState({ url: '', summary: '' });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [copiedSummary, setCopiedSummary] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [creditExceeded, setCreditExceeded] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const { credits, decrementCredits } = useContext(CreditContext); // Use CreditContext
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const summaryRef = useRef(null);

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (shouldScroll && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: 'smooth' });
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

      const { data } = await getSummary({ articleUrl: article.url });

      if (data?.summary) {
        const newArticle = { ...article, summary: data.summary };
        const updatedAllArticles = [newArticle, ...allArticles];

        setArticle(newArticle);
        setAllArticles(updatedAllArticles);

        localStorage.setItem('articles', JSON.stringify(updatedAllArticles));

        decrementCredits(); // Deduct one credit
        setShouldScroll(true);
      }
    } catch (error) {
      console.error('Error fetching summary:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCopySummary = (summary) => {
    setCopiedSummary(summary);
    navigator.clipboard.writeText(summary);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  return (
    <section className='mt-16 w-full max-w-4xl mx-auto px-4'>
      <div className='flex flex-col w-full gap-4'>
        {/* Search */}
        <form
          className='relative flex justify-center items-center shadow-lg p-4 rounded-lg bg-white'
          onSubmit={handleSubmit}
        >
          <img src={linkIcon} alt='link-icon' className='absolute left-6 w-6 h-6' />
          <input
            type='url'
            placeholder='Paste the article link'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className='w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
          <button
            type='submit'
            className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          >
            ↵
          </button>
        </form>

        {/* Toggle Button */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className='mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'
        >
          {showHistory ? 'Hide History' : 'Show History'}
        </button>

        {/* Browse URL history */}
        {showHistory && (
          <div className="flex flex-col gap-2 max-h-60 overflow-y-auto mt-4">
            {allArticles.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="flex items-center p-2 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="copy_btn mr-2" onClick={() => handleCopy(item.url)}>
                  <img
                    src={copied === item.url ? tick : copy}
                    alt="copy_icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                  {item.url}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Results */}
      <div className="my-10 max-w-full flex justify-center">
        {isLoading ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            This isn't supposed to happen..
            <br />
            <span className='text-red-500'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && !creditExceeded && (
            <div ref={summaryRef} className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg w-full">
              <div className="flex justify-between items-start">
                <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                  Article <span className="blue_gradient">Summary</span>
                </h2>
                <div className="copy_btn ml-4" onClick={() => handleCopySummary(article.summary)}>
                  <img
                    src={copiedSummary === article.summary ? tick : copy}
                    alt="copy_icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700">{article.summary}</p>
              </div>
            </div>
          )
        )}
        {/* Credit Exceeded Warning */}
        {creditExceeded && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
            <strong className="font-bold">Warning!</strong>
            <span className="block sm:inline">
              {' '}You have exhausted your free credits. Please purchase credits to continue.
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
