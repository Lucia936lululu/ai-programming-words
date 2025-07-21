'use client'

import { useState } from 'react'

interface Word {
  id: number
  english: string
  chinese: string
  phonetic?: string
  explanation: string
  example: string
  codeExample?: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
}

interface WordCardProps {
  word: Word
  onRemember: () => void
  onForget: () => void
}

export default function WordCard({ word, onRemember, onForget }: WordCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showCodeExample, setShowCodeExample] = useState(false)

  const getCategoryStyle = (category: string) => {
    const styles = {
      '工具': {
        bg: 'bg-gradient-to-r from-slate-500 to-slate-600',
        lightBg: 'bg-slate-50',
        darkBg: 'bg-slate-900',
        text: 'text-slate-700',
        border: 'border-slate-200',
      },
      // 可按需扩展其他分类
    }
    return styles[category as keyof typeof styles] || styles['工具']
  }

  const categoryStyle = getCategoryStyle(word.category)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center justify-start p-4 pb-28 sm:pb-36">
      <div className="w-full max-w-xl space-y-4">
        {/* 卡片区 */}
        <div
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl border border-gray-700 overflow-hidden max-h-[75vh] sm:max-h-[80vh] overflow-y-auto"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* 顶部颜色条 */}
          <div className={`${categoryStyle.bg} h-1 w-full`}></div>

          {!isFlipped ? (
            <div className="p-5 sm:p-6 space-y-4 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">{word.english}</h1>

              {word.phonetic && (
                <div className="text-gray-300 text-sm font-mono">
                  /{word.phonetic}/ 🔊
                </div>
              )}

              <div className={`${categoryStyle.bg} text-white py-2 px-4 rounded-lg inline-block text-xl`}>
                {word.chinese}
              </div>

              <div className="bg-gray-700 text-gray-200 p-3 rounded-md text-sm leading-relaxed border border-gray-600">
                {word.explanation.length > 60
                  ? word.explanation.slice(0, 60) + '...'
                  : word.explanation}
              </div>

              <p className="text-xs text-gray-400 italic">点击卡片查看更多</p>
            </div>
          ) : (
            <div className="p-5 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <div>
                  <h2 className="text-2xl font-bold text-white">{word.english}</h2>
                  <p className="text-sm text-gray-400">{word.chinese}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsFlipped(false)
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  ❌
                </button>
              </div>

              <div className="bg-gray-700 p-3 rounded-md border border-gray-600 text-sm text-gray-200">
                <h3 className="text-white font-semibold mb-1">📖 详细解释</h3>
                {word.explanation}
              </div>

              <div className="bg-gray-700 p-3 rounded-md border border-gray-600 text-sm text-gray-200">
                <h3 className="text-white font-semibold mb-1">💬 使用例句</h3>
                <em>"{word.example}"</em>
              </div>

              {word.codeExample && (
                <div className="bg-gray-700 p-3 rounded-md border border-gray-600 text-sm text-gray-200">
                  <h3 className="text-white font-semibold mb-2 flex justify-between items-center">
                    💻 代码示例
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowCodeExample(true)
                      }}
                      className="text-xs bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-white"
                    >
                      展开
                    </button>
                  </h3>
                  <pre className="bg-gray-900 text-green-400 p-2 rounded overflow-auto max-h-[100px]">
                    {word.codeExample.slice(0, 80)}...
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 引导语 */}
        <p className="text-center text-sm text-gray-500">
          💭 你能在项目中自然使用这个单词吗？
        </p>
      </div>

      {/* 底部按钮固定 */}
      <div className="fixed bottom-4 left-0 right-0 px-4 z-50">
        <div className="flex justify-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onForget()
            }}
            className="flex-1 py-3 bg-white border border-red-300 text-red-600 rounded-xl text-sm font-medium shadow hover:bg-red-50"
          >
            ❌ 不认识
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onRemember()
            }}
            className="flex-1 py-3 bg-green-500 text-white rounded-xl text-sm font-medium shadow hover:bg-green-600"
          >
            ✅ 认识
          </button>
        </div>
      </div>

      {/* 模态框展示完整代码 */}
      {showCodeExample && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
          onClick={() => setShowCodeExample(false)}
        >
          <div
            className="bg-gray-800 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-auto shadow-xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-700 p-4 border-b border-gray-600 flex justify-between items-center">
              <span className="text-white font-mono">{word.english}.js</span>
              <button
                onClick={() => setShowCodeExample(false)}
                className="text-gray-400 hover:text-white"
              >
                关闭
              </button>
            </div>
            <div className="bg-gray-900 text-green-400 p-6 overflow-auto text-sm font-mono leading-relaxed">
              <pre>{word.codeExample}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
