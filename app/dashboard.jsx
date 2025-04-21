'use client'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const getTodayDate = () => {
  return new Date().toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

export default function Dashboard() {
  const sections = [
    {
      title: "TALANT",
      description: "Запуск китайского канала и адаптация контента",
      state: "В процессе развития",
      stateColor: "bg-yellow-400",
      hypothesis: "Если запустить китайскую версию, просмотры вырастут x3",
      data: [
        { week: "01.04", value: 2 },
        { week: "08.04", value: 4 },
        { week: "15.04", value: 5 },
        { week: "22.04", value: 3 },
      ],
      blocks: [
        "5 китайских роликов + подрядчик",
        "Цель на неделю: закрепить подрядчика и выпустить ещё 3 ролика",
        "Сегодня: 2 видео монтажёру, чек-ин в таблице",
      ],
    },
    {
      title: "USA",
      description: "YouTube-канал для монетизации в США",
      state: "Набираем команду",
      stateColor: "bg-green-400",
      hypothesis: "Если нанять редактора, будет стабильный график",
      data: [
        { week: "01.04", value: 45 },
        { week: "08.04", value: 80 },
        { week: "15.04", value: 132 },
        { week: "22.04", value: 70 },
      ],
      blocks: [
        "3 ролика + обложки",
        "Цель на неделю: оформить обложки и планировать контент",
        "Сегодня: 1 сценарий, 1 монтаж",
      ],
    },
    {
      title: "Фабрика",
      description: "Создание и продвижение девочек-блогеров",
      state: "2 девочки активно постят",
      stateColor: "bg-blue-400",
      hypothesis: "Если давать тренды, будет больше залетов",
      data: [
        { week: "01.04", value: 1 },
        { week: "08.04", value: 2 },
        { week: "15.04", value: 3 },
        { week: "22.04", value: 4 },
      ],
      blocks: [
        "5 сообщений, таблица, тренд",
        "Цель на неделю: собрать фидбек и обновить гайды",
        "Сегодня: 3 ролика актрисам, пост в чат",
      ],
    },
  ]

  const relationship = {
    status: "Счастливы",
    color: "bg-green-400",
    satisfaction: 87,
  }

  const sport = {
    bodyState: "Лёгкая усталость, в целом бодро",
    training: [
      { day: "Пн", value: 1 },
      { day: "Вт", value: 1 },
      { day: "Ср", value: 0 },
      { day: "Чт", value: 1 },
      { day: "Пт", value: 1 },
      { day: "Сб", value: 0 },
      { day: "Вс", value: 1 },
    ],
    bars: 20,
    pullups: 10,
  }

  return (
    <main className="bg-[#f9f9f9] min-h-screen py-6 px-6 text-black font-[San Francisco] antialiased backdrop-blur-md">
      {/* Header per column */}
      <div className="grid grid-cols-3 gap-4 mb-6 w-full px-6">
        <div className="w-full bg-white/70 rounded-2xl px-6 py-4 shadow-md text-xl font-semibold text-gray-900 text-center backdrop-blur-md">
          Жизнь в раю
        </div>
        <div className="w-full bg-white/70 rounded-2xl px-6 py-4 shadow-md text-xl font-semibold text-gray-900 text-center backdrop-blur-md">
          Золотых Сергей
        </div>
        <div className="w-full bg-white/70 rounded-2xl px-6 py-4 shadow-md text-xl font-semibold text-gray-900 text-center backdrop-blur-md">
          {getTodayDate()}
        </div>
      </div>

      {/* Grid wrapper with projects + side trackers */}
      <div className="gap-6 w-full px-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {/* Project columns */}
        {sections.map((section, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-white/80 to-[#f5f5f7]/80 w-full rounded-3xl p-6 shadow-lg flex flex-col items-center gap-4 min-h-[780px] border border-gray-200 backdrop-blur-lg animate-fade-in"
          >
            <div className="w-full bg-white/60 rounded-2xl px-4 py-3 shadow-inner backdrop-blur-sm">
              <div className="text-base font-semibold tracking-tight text-center text-gray-900">
                {section.title}
              </div>
              <p className="text-sm text-gray-500 text-center leading-snug mt-1">{section.description}</p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600 bg-white/50 rounded-full px-3 py-1 shadow backdrop-blur-sm">
              <span className={`w-2 h-2 rounded-full ${section.stateColor}`}></span>
              {section.state}
            </div>

            <div className="w-full text-center bg-white/70 rounded-2xl px-4 py-4 text-sm font-medium text-gray-900 shadow-lg backdrop-blur-sm">
              <div className="text-xs text-gray-400 mb-1">Цель на месяц</div>
              {section.blocks[0]}
            </div>

            <div className="w-full text-center bg-white/70 rounded-2xl px-4 py-3 text-sm text-gray-800 shadow backdrop-blur-sm">
              <div className="text-xs text-gray-400 mb-1">Цель на неделю</div>
              {section.blocks[1]}
            </div>

            <div className="w-full h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={section.data} barCategoryGap={16} margin={{ top: 10, bottom: 0, left: 0, right: 0 }}>
                  <CartesianGrid stroke="#e5e5e5" strokeDasharray="3 3" />
                  <XAxis dataKey="week" stroke="#888" fontSize={12} />
                  <YAxis stroke="#888" fontSize={12} />
                  <Tooltip wrapperClassName="text-xs font-medium" />
                  <Bar dataKey="value" fill="#1c1c1e" radius={[6, 6, 0, 0]} barSize={8} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="w-full text-center bg-gradient-to-br from-[#f9f9f9]/80 to-[#ebebeb]/80 rounded-2xl px-4 py-3 text-sm font-normal text-gray-800 shadow-md backdrop-blur-sm">
              <div className="text-xs text-gray-400 mb-1">Цель на сегодня</div>
              {section.blocks[2]}
            </div>

            <div className="w-full text-left bg-white/70 rounded-2xl px-4 py-4 text-sm font-normal text-gray-800 shadow-inner backdrop-blur-sm border border-gray-200">
              <strong className="block text-gray-500 mb-1">Гипотеза:</strong>
              {section.hypothesis}
            </div>
          </div>
        ))}

        {/* Trackers */}
        <div className="flex flex-col gap-4">
          <div className="bg-white/80 rounded-3xl p-6 shadow-md backdrop-blur-lg">
            <div className="text-base font-semibold mb-2">❤️ Отношения</div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className={`w-2 h-2 rounded-full ${relationship.color}`}></span>
              {relationship.status}
            </div>
            <div className="text-sm text-gray-600">Удовлетворён на {relationship.satisfaction}%</div>
          </div>

          <div className="bg-white/80 rounded-3xl p-6 shadow-md backdrop-blur-lg">
            <div className="text-base font-semibold mb-2">💪 Спорт</div>
            <p className="text-sm text-gray-700 mb-2">{sport.bodyState}</p>
            <ResponsiveContainer width="100%" height={80}>
              <BarChart data={sport.training} margin={{ top: 5, bottom: 0 }}>
                <XAxis dataKey="day" stroke="#888" fontSize={10} />
                <Bar dataKey="value" fill="#1c1c1e" radius={[4, 4, 0, 0]} barSize={8} />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-sm mt-2">Брусья: {sport.bars} / Подтягивания: {sport.pullups}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
