import React from 'react';

const FeeTable = ({ data }) => {
  return (
    <div className="max-w-[1200px] mx-auto my-8 font-['Inter',system-ui,-apple-system,sans-serif] rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-center text-white">
        <h2 className="m-0 text-3xl font-bold tracking-tight text-white">Fee Structure 2025-26</h2>
        <p className="mt-3 mb-0 text-base opacity-90 text-white">Transparent pricing designed for academic excellence</p>
      </div>

      <div className="p-6 overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 min-w-[800px]">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 border-b border-gray-200 text-left font-medium text-gray-600">Curriculum & Grade</th>
              <th className="p-4 border-b border-gray-200 text-left font-medium text-gray-600">Subject(s)</th>
              <th className="p-4 border-b border-gray-200 text-left font-medium text-gray-600">Schedule</th>
              <th className="p-4 border-b border-gray-200 text-center font-medium text-gray-600">Students per Teacher</th>
              <th className="p-4 border-b border-gray-200 text-right font-medium text-gray-600">Fee</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 border-b border-gray-200 font-medium">{row.curriculum}</td>
                <td className="p-4 border-b border-gray-200">{row.subjects}</td>
                <td className="p-4 border-b border-gray-200">{row.schedule}</td>
                <td className="p-4 border-b border-gray-200 text-center">{row.studentsPerTeacher}</td>
                <td className="p-4 border-b border-gray-200 text-right">{row.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="font-medium text-gray-700 mb-4">Need more information?</div>
          <a
            href="mailto:smartjoylearning@gmail.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white no-underline px-6 py-3 rounded-lg font-medium transition-all hover:bg-indigo-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact Us
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-center text-white">
        <div className="italic font-medium tracking-wide">
          "Empowering Young Minds, Inspiring Bright Futures"
        </div>
        <div className="mt-2 text-sm opacity-90">
          Established 2010 • Trusted by 1000+ Students
        </div>
      </div>
    </div>
  );
};

export default FeeTable;
