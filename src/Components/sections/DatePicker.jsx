import { useState } from "react";

const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePrevMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(
      `${day} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
    );
  };

  const renderDays = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const days = [];
    const today = new Date();

    // Empty cells for days before the first day
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="flex items-center justify-center h-10"
        />
      );
    }

    // Days of the month
    for (let day = 1; day <= lastDate; day++) {
      const isToday =
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

      const isPastDate = new Date(year, month, day) < today;

      const isFutureDate = new Date(year, month, day) > today;

      days.push(
        <div
          key={day}
          className={`flex items-center justify-center h-10 px-5 rounded-lg transition-all duration-200 ease-in cursor-pointer ${
            isToday
              ? "bg-blue-500 text-white"
              : isPastDate
              ? "hover:bg-gray-200 text-gray-400/80"
              : isFutureDate
              ? "bg-transparent hover:bg-blue-400 hover:text-zinc-100 text-zinc-800"
              : "hover:bg-blue-100"
          } ${
            selectedDate === `${day} ${months[month]} ${year}` &&
            "bg-blue-500 text-white font-bold shadow-xl shadow-blue-300/80"
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="relative max-w-md p-4 bg-white rounded-lg shadow-2xl shadow-blue-200/80">
      <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Select date"
            value={selectedDate || ""}
            readOnly
          />
        </div>
      </div>

      <div className="calendar border border-gray-300 rounded-lg bg-gray-50 p-2">
        <div className="calendar-header flex items-center justify-between mb-4">
          <button
            onClick={handlePrevMonth}
            className="px-2 py-1 text-sm font-semibold text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            &lt;
          </button>
          <span className="text-lg font-medium">{`${
            months[currentDate.getMonth()]
          } ${currentDate.getFullYear()}`}</span>
          <button
            onClick={handleNextMonth}
            className="px-2 py-1 text-sm font-semibold text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>

        <div className="calendar-days grid grid-cols-7 gap-2 text-center">
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
