'use client'

import { useState, useEffect } from 'react'
import { words, Word } from '@/data/words'
import WordCard from '@/components/WordCard'

// 本地存储的键名
const STORAGE_KEYS = {
  CURRENT_INDEX: 'wordApp_currentIndex',
  LEARNED_WORDS: 'wordApp_learnedWords',
  LEARNING_STATS: 'wordApp_learningStats'
}

// 学习统计接口
interface LearningStats {
  totalStudied: number
  totalMastered: number
  studyStartDate: string
  lastStudyDate: string
}

export default function Home() {
  // 状态管理
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [learnedWords, setLearnedWords] = useState<Set<number>>(new Set())
  const [learningStats, setLearningStats] = useState<LearningStats>({
    totalStudied: 0,
    totalMastered: 0,
    studyStartDate: new Date().toISOString(),
    lastStudyDate: new Date().toISOString()
  })
  const [isLoading, setIsLoading] = useState(true)
  const [showStats, setShowStats] = useState(false) // 控制统计面板显示

  // 从本地存储加载数据
  useEffect(() => {
    const loadFromStorage = () => {
      try {
        const savedIndex = localStorage.getItem(STORAGE_KEYS.CURRENT_INDEX)
        if (savedIndex !== null) {
          const index = parseInt(savedIndex, 10)
          if (index >= 0 && index < words.length) {
            setCurrentWordIndex(index)
          }
        }

        const savedLearnedWords = localStorage.getItem(STORAGE_KEYS.LEARNED_WORDS)
        if (savedLearnedWords) {
          const learnedSet = new Set<number>(JSON.parse(savedLearnedWords))
          setLearnedWords(learnedSet)
        }

        const savedStats = localStorage.getItem(STORAGE_KEYS.LEARNING_STATS)
        if (savedStats) {
          const stats = JSON.parse(savedStats)
          setLearningStats(stats)
        }

      } catch (error) {
        console.log('加载本地数据时出错:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (typeof window !== 'undefined') {
      loadFromStorage()
    } else {
      setIsLoading(false)
    }
  }, [])

  // 保存数据到本地存储
  const saveToStorage = (key: string, data: any) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data))
      }
    } catch (error) {
      console.log('保存数据时出错:', error)
    }
  }

  // 更新学习统计
  const updateLearningStats = (newMasteredCount: number) => {
    const newStats: LearningStats = {
      ...learningStats,
      totalStudied: Math.max(learningStats.totalStudied, currentWordIndex + 1),
      totalMastered: newMasteredCount,
      lastStudyDate: new Date().toISOString()
    }
    setLearningStats(newStats)
    saveToStorage(STORAGE_KEYS.LEARNING_STATS, newStats)
  }

  // 处理"认识"按钮
  const handleRemember = () => {
    const currentWordId = words[currentWordIndex].id
    const newLearnedWords = new Set(learnedWords)
    newLearnedWords.add(currentWordId)
    
    setLearnedWords(newLearnedWords)
    saveToStorage(STORAGE_KEYS.LEARNED_WORDS, Array.from(newLearnedWords))
    updateLearningStats(newLearnedWords.size)
    nextWord()
  }

  // 处理"不认识"按钮
  const handleForget = () => {
    const currentWordId = words[currentWordIndex].id
    const newLearnedWords = new Set(learnedWords)
    newLearnedWords.delete(currentWordId)
    
    setLearnedWords(newLearnedWords)
    saveToStorage(STORAGE_KEYS.LEARNED_WORDS, Array.from(newLearnedWords))
    updateLearningStats(newLearnedWords.size)
    nextWord()
  }

  // 切换到下一个单词
  const nextWord = () => {
    const nextIndex = (currentWordIndex + 1) % words.length
    setCurrentWordIndex(nextIndex)
    saveToStorage(STORAGE_KEYS.CURRENT_INDEX, nextIndex)
  }

  // 重置学习进度
  const resetProgress = () => {
    if (window.confirm('确定要重置所有学习进度吗？此操作不可恢复！')) {
      setCurrentWordIndex(0)
      setLearnedWords(new Set())
      
      const resetStats: LearningStats = {
        totalStudied: 0,
        totalMastered: 0,
        studyStartDate: new Date().toISOString(),
        lastStudyDate: new Date().toISOString()
      }
      setLearningStats(resetStats)

      localStorage.removeItem(STORAGE_KEYS.CURRENT_INDEX)
      localStorage.removeItem(STORAGE_KEYS.LEARNED_WORDS)
      localStorage.removeItem(STORAGE_KEYS.LEARNING_STATS)
    }
  }

  // 跳转到特定单词
  const jumpToWord = (index: number) => {
    if (index >= 0 && index < words.length) {
      setCurrentWordIndex(index)
      saveToStorage(STORAGE_KEYS.CURRENT_INDEX, index)
    }
  }

  // 计算进度百分比
  const progressPercentage = Math.round(((currentWordIndex + 1) / words.length) * 100)
  const masteredPercentage = Math.round((learnedWords.size / words.length) * 100)

  // 获取当前单词
  const currentWord = words[currentWordIndex]
  const isCurrentWordLearned = learnedWords.has(currentWord.id)

  // 加载中状态
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载学习数据中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      
      {/* 极简顶部栏 - 只显示最核心信息 */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center px-6 py-4">
          {/* 左侧：简单进度 */}
          <div className="flex items-center space-x-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-gray-700">
                {currentWordIndex + 1} / {words.length}
              </span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-green-600">
                已掌握 {learnedWords.size}
              </span>
            </div>
          </div>

          {/* 右侧：工具按钮 */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowStats(!showStats)}
              className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition-colors"
              title="查看详细统计"
            >
              📊
            </button>
            <button
              onClick={resetProgress}
              className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition-colors text-red-500"
              title="重置进度"
            >
              🔄
            </button>
          </div>
        </div>

        {/* 极简进度条 */}
        <div className="px-6">
          <div className="w-full bg-white/30 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 统计面板 - 可展开/收起 */}
      {showStats && (
        <div className="absolute top-20 left-6 right-6 z-20 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 animate-in slide-in-from-top-2 duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{currentWordIndex + 1}</div>
              <div className="text-xs text-gray-600">当前进度</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{learnedWords.size}</div>
              <div className="text-xs text-gray-600">已掌握 ({masteredPercentage}%)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{learningStats.totalStudied}</div>
              <div className="text-xs text-gray-600">已学习</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-indigo-600">{currentWord.category}</div>
              <div className="text-xs text-gray-600">{currentWord.difficulty}</div>
            </div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>掌握程度</span>
            <span>{masteredPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${masteredPercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* 主学习区域 - 绝对居中 */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          
          {/* 标题 - 简洁版 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              🚀 AI编程单词学习器
            </h1>
            <p className="text-gray-600">
              掌握编程英语，与AI协作无障碍
            </p>
          </div>

          {/* 当前单词状态提示 */}
          {isCurrentWordLearned && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
              <span className="text-green-700">✅ 这个单词你已经掌握了！</span>
            </div>
          )}

          {/* 单词卡片 - 真正的页面焦点 */}
          <div className="mb-8">
            <WordCard
              word={currentWord}
              onRemember={handleRemember}
              onForget={handleForget}
            />
          </div>

          {/* 底部导航 - 最小化设计 */}
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={() => jumpToWord(Math.max(0, currentWordIndex - 1))}
              disabled={currentWordIndex === 0}
              className="p-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              ⬅️
            </button>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm text-gray-600">
                {currentWordIndex + 1} / {words.length}
              </span>
            </div>
            
            <button
              onClick={() => jumpToWord(Math.min(words.length - 1, currentWordIndex + 1))}
              disabled={currentWordIndex === words.length - 1}
              className="p-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              ➡️
            </button>
          </div>

          {/* 学习提示 */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-gray-600 text-sm">
              💡 专注学习，进度自动保存
            </p>
            <p className="text-gray-500 text-sm">
              🎯 目标：掌握150个编程英语核心词汇
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}