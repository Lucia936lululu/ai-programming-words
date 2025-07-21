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

  // 现代清晰配色系统
  const getCategoryStyle = (category: string) => {
    const styles = {
      '基础概念': { 
        bg: 'bg-gradient-to-r from-blue-500 to-blue-600', 
        lightBg: 'bg-blue-50', 
        darkBg: 'bg-blue-900',
        text: 'text-blue-700',
        border: 'border-blue-200'
      },
      'Web开发': { 
        bg: 'bg-gradient-to-r from-purple-500 to-purple-600', 
        lightBg: 'bg-purple-50', 
        darkBg: 'bg-purple-900',
        text: 'text-purple-700',
        border: 'border-purple-200'
      },
      'React': { 
        bg: 'bg-gradient-to-r from-cyan-500 to-cyan-600', 
        lightBg: 'bg-cyan-50', 
        darkBg: 'bg-cyan-900',
        text: 'text-cyan-700',
        border: 'border-cyan-200'
      },
      '数据结构': { 
        bg: 'bg-gradient-to-r from-indigo-500 to-indigo-600', 
        lightBg: 'bg-indigo-50', 
        darkBg: 'bg-indigo-900',
        text: 'text-indigo-700',
        border: 'border-indigo-200'
      },
      'API': { 
        bg: 'bg-gradient-to-r from-emerald-500 to-emerald-600', 
        lightBg: 'bg-emerald-50', 
        darkBg: 'bg-emerald-900',
        text: 'text-emerald-700',
        border: 'border-emerald-200'
      },
      '版本控制': { 
        bg: 'bg-gradient-to-r from-orange-500 to-orange-600', 
        lightBg: 'bg-orange-50', 
        darkBg: 'bg-orange-900',
        text: 'text-orange-700',
        border: 'border-orange-200'
      },
      '数据库': { 
        bg: 'bg-gradient-to-r from-pink-500 to-pink-600', 
        lightBg: 'bg-pink-50', 
        darkBg: 'bg-pink-900',
        text: 'text-pink-700',
        border: 'border-pink-200'
      },
      '测试': { 
        bg: 'bg-gradient-to-r from-teal-500 to-teal-600', 
        lightBg: 'bg-teal-50', 
        darkBg: 'bg-teal-900',
        text: 'text-teal-700',
        border: 'border-teal-200'
      },
      '部署': { 
        bg: 'bg-gradient-to-r from-red-500 to-red-600', 
        lightBg: 'bg-red-50', 
        darkBg: 'bg-red-900',
        text: 'text-red-700',
        border: 'border-red-200'
      },
      '工具': { 
        bg: 'bg-gradient-to-r from-slate-500 to-slate-600', 
        lightBg: 'bg-slate-50', 
        darkBg: 'bg-slate-900',
        text: 'text-slate-700',
        border: 'border-slate-200'
      },
      '安全': { 
        bg: 'bg-gradient-to-r from-amber-500 to-amber-600', 
        lightBg: 'bg-amber-50', 
        darkBg: 'bg-amber-900',
        text: 'text-amber-700',
        border: 'border-amber-200'
      },
    }
    return styles[category as keyof typeof styles] || styles['工具']
  }

  const categoryStyle = getCategoryStyle(word.category)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center p-4">
      {/* 减少间距，紧凑布局 */}
      <div className="w-full max-w-2xl space-y-4">
        
        {/* 主卡片 - 深色现代设计 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
          
          {!isFlipped ? (
            /* 正面 - 现代深色设计 */
            <div 
              className="cursor-pointer hover:from-gray-750 hover:to-gray-850 transition-all duration-300"
              onClick={() => setIsFlipped(true)}
            >
              
              {/* 顶部渐变条 */}
              <div className={`${categoryStyle.bg} h-1 w-full`}></div>
              
              {/* 分类标签区 - 深色背景 */}
              <div className="px-6 py-4 bg-gray-750 border-b border-gray-600">
                <div className="flex items-center justify-between">
                  <span className={`${categoryStyle.bg} text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg`}>
                    {word.category}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                    word.difficulty === 'easy' ? 'bg-green-500 text-white' : 
                    word.difficulty === 'medium' ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {word.difficulty}
                  </span>
                </div>
              </div>
              
              {/* 主要内容区 - 深色背景，浅色文字 */}
              <div className="p-8 text-center space-y-6">
                
                {/* 英文单词 - 白色大字 */}
                <div>
                  <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
                    {word.english}
                  </h1>
                  
                  {/* 音标 - 灰色背景 */}
                  {word.phonetic && (
                    <div className="flex items-center justify-center gap-3 text-gray-300">
                      <span className="text-lg font-mono bg-gray-700 px-4 py-2 rounded-lg border border-gray-600">
                        {word.phonetic}
                      </span>
                      <button className="p-2 hover:bg-gray-700 rounded-lg text-lg transition-colors">
                        🔊
                      </button>
                    </div>
                  )}
                </div>

                {/* 中文释义 - 品牌色背景 */}
                <div className={`${categoryStyle.bg} rounded-xl px-6 py-4 shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{word.chinese}</span>
                </div>

                {/* 简短说明 - 深灰背景 */}
                <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  <p className="text-base text-gray-200 leading-relaxed">
                    {word.explanation.length > 70 
                      ? `${word.explanation.substring(0, 70)}...` 
                      : word.explanation
                    }
                  </p>
                </div>

                {/* 提示 - 柔和提示 */}
                <div className="text-sm text-gray-400 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                  <span>点击查看详细信息</span>
                </div>
              </div>
            </div>
          ) : (
            /* 背面 - 深色详细信息 */
            <div className="p-8 space-y-5 relative">
              
              <div className={`${categoryStyle.bg} h-1 w-full -mx-8 -mt-8 mb-6`}></div>
              
              {/* 标题栏 - 修复关闭按钮 */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-600">
                <div>
                  <h2 className="text-3xl font-black text-white mb-1">{word.english}</h2>
                  <p className="text-lg text-gray-300">{word.chinese}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsFlipped(false)
                  }}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 详细信息卡片组 */}
              <div className="space-y-4">
                
                <div className="bg-gray-700 border border-gray-600 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-white mb-3">📖 详细解释</h3>
                  <p className="text-gray-200 leading-relaxed">{word.explanation}</p>
                </div>
                
                <div className="bg-gray-700 border border-gray-600 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-white mb-3">💬 使用例句</h3>
                  <p className="text-gray-200 italic leading-relaxed">"{word.example}"</p>
                </div>
                
                {word.codeExample && (
                  <div className="bg-gray-700 border border-gray-600 rounded-lg p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">💻 代码示例</h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setShowCodeExample(true)
                        }}
                        className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        查看完整代码
                      </button>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <code className="text-green-400 text-sm font-mono block leading-relaxed">
                        {word.codeExample.substring(0, 80)}...
                      </code>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 操作按钮 - 分离在卡片外部，更小更清晰 */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onForget()
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 hover:border-red-300 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-sm">不认识</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              onRemember()
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">认识</span>
          </button>
        </div>

        {/* 学习提示 - 简化设计 */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-300">
            💭 在实际项目中遇到这个词时，你能立即理解它的含义和用法吗？
          </p>
        </div>

        {/* 代码模态框 - 改进设计 */}
        {showCodeExample && word.codeExample && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowCodeExample(false)}
          >
            <div 
              className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-gray-600"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-700 px-6 py-4 flex justify-between items-center border-b border-gray-600">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="font-mono text-base text-white">{word.english}.js</span>
                </div>
                <button
                  onClick={() => setShowCodeExample(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-900 text-green-400 p-6 overflow-auto max-h-[60vh]">
                <pre className="text-sm font-mono leading-relaxed">
                  {word.codeExample}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}