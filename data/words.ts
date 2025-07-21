// 完整的编程英语词汇库 - 150个精选词汇（按学习路径重新排序）
export interface Word {
  id: number
  english: string
  chinese: string
  phonetic?: string      // 新增：音标
  explanation: string
  example: string
  codeExample?: string   // 新增：代码示例
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export const words: Word[] = [
  // === 第1组：开发环境工具 (15个) - 你已在用 ===
  {
    id: 1,
    english: "syntax",
    chinese: "语法",
    explanation: "编程语言的规则和结构",
    example: "Check the syntax error in line 15.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 2,
    english: "debug",
    chinese: "调试",
    explanation: "查找和修复代码错误",
    example: "Use console.log to debug the application.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 3,
    english: "terminal",
    chinese: "终端",
    explanation: "命令行界面",
    example: "Use terminal to run npm commands.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 4,
    english: "package",
    chinese: "包",
    explanation: "可重用的代码模块",
    example: "Install the React package from npm.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 5,
    english: "dependency",
    chinese: "依赖",
    explanation: "项目需要的外部代码库",
    example: "Manage project dependencies carefully.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 6,
    english: "build",
    chinese: "构建",
    explanation: "编译和准备代码的过程",
    example: "Run the build command before deployment.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 7,
    english: "compile",
    chinese: "编译",
    explanation: "将源代码转换为机器代码",
    example: "Compile the C++ program before running.",
    category: "开发环境",
    difficulty: "medium"
  },
  {
    id: 8,
    english: "runtime",
    chinese: "运行时",
    explanation: "程序执行期间的环境",
    example: "A runtime error occurred during execution.",
    category: "开发环境",
    difficulty: "medium"
  },
  {
    id: 9,
    english: "CLI",
    chinese: "命令行界面",
    explanation: "通过文本命令操作的界面",
    example: "Use CLI tools to automate tasks.",
    category: "开发环境",
    difficulty: "medium"
  },
  {
    id: 10,
    english: "IDE",
    chinese: "集成开发环境",
    explanation: "编写代码的软件工具",
    example: "VS Code is a popular IDE for web development.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 11,
    english: "linter",
    chinese: "代码检查器",
    explanation: "检查代码质量的工具",
    example: "Use ESLint to maintain code quality.",
    category: "开发环境",
    difficulty: "medium"
  },
  {
    id: 12,
    english: "formatter",
    chinese: "格式化器",
    explanation: "统一代码格式的工具",
    example: "Prettier automatically formats your code.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 13,
    english: "documentation",
    chinese: "文档",
    explanation: "解释代码和项目的文字材料",
    example: "Write clear documentation for the API.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 14,
    english: "version",
    chinese: "版本",
    explanation: "软件的不同发布状态",
    example: "Check the Node.js version.",
    category: "开发环境",
    difficulty: "easy"
  },
  {
    id: 15,
    english: "exception",
    chinese: "异常",
    explanation: "程序执行中的错误情况",
    example: "Handle the exception with try-catch block.",
    category: "开发环境",
    difficulty: "medium"
  },

  // === 第2组：HTML/CSS基础 (30个) - 你正在学 ===
  {
    id: 16,
    english: "HTML",
    chinese: "超文本标记语言",
    explanation: "构建网页结构的标记语言",
    example: "Write semantic HTML for better accessibility.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 17,
    english: "CSS",
    chinese: "层叠样式表",
    explanation: "控制网页样式和布局的语言",
    example: "Use CSS Grid for responsive layouts.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 18,
    english: "element",
    chinese: "元素",
    explanation: "HTML文档的基本构建块",
    example: "Select the button element by its ID.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 19,
    english: "attribute",
    chinese: "属性",
    explanation: "HTML元素的特性设置",
    example: "Set the src attribute for the image.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 20,
    english: "selector",
    chinese: "选择器",
    explanation: "CSS中选择HTML元素的方法",
    example: "Use class selector to style elements.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 21,
    english: "responsive",
    chinese: "响应式",
    explanation: "适应不同设备屏幕的设计",
    example: "Create a responsive navigation menu.",
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 22,
    english: "viewport",
    chinese: "视口",
    explanation: "浏览器显示网页的可见区域",
    example: "Set the viewport meta tag for mobile.",
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 23,
    english: "semantic",
    chinese: "语义化",
    explanation: "使用有意义的HTML标签",
    example: "Use semantic HTML tags like header and nav.",
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 24,
    english: "accessibility",
    chinese: "可访问性",
    explanation: "让所有用户都能使用的设计",
    example: "Improve accessibility with ARIA labels.",
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 25,
    english: "browser",
    chinese: "浏览器",
    explanation: "访问网页的软件应用",
    example: "Test the website in different browsers.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 26,
    english: "flexbox",
    chinese: "弹性盒子",
    explanation: "CSS布局方法",
    example: "Use flexbox to center the content.",
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 27,
    english: "grid",
    chinese: "网格",
    explanation: "CSS二维布局系统",
    example: "CSS Grid is perfect for complex layouts.",
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 28,
    english: "media query",
    chinese: "媒体查询",
    explanation: "CSS响应式设计的关键技术",
    example: "Use media queries for mobile styles.",
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 29,
    english: "variable",
    chinese: "变量",
    phonetic: "/ˈvɛriəbəl/",
    explanation: "存储数据的容器",
    example: "Declare a variable to store the user's name.",
    codeExample: `// 变量声明和使用
  const userName = "Alice";     // 常量
  let age = 25;                // 可变变量
  var isActive = true;         // 老式声明
  
  // 变量重新赋值
  age = 26;
  console.log(userName, age);`,
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 30,
    english: "function",
    chinese: "函数",
    phonetic: "/ˈfʌŋkʃən/",
    explanation: "可重复使用的代码块",
    example: "Call this function to calculate the sum.",
    codeExample: `// 函数定义的几种方式
  function calculateSum(a, b) {
    return a + b;
  }
  
  // 箭头函数
  const multiply = (x, y) => x * y;
  
  // 函数调用
  const result = calculateSum(5, 3);  // 8
  const product = multiply(4, 6);     // 24`,
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 31,
    english: "loop",
    chinese: "循环",
    phonetic: "/luːp/",
    explanation: "重复执行代码的结构",
    example: "Use a for loop to iterate through the array.",
    codeExample: `// 常见的循环类型
  const items = ['apple', 'banana', 'orange'];
  
  // for循环
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
  
  // forEach循环
  items.forEach((item, index) => {
    console.log(\`\${index}: \${item}\`);
  });
  
  // while循环
  let count = 0;
  while (count < 3) {
    console.log('Count:', count);
    count++;
  }`,
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 32,
    english: "condition",
    chinese: "条件",
    phonetic: "/kənˈdɪʃən/",
    explanation: "判断真假的表达式",
    example: "Check the condition before executing the code.",
    codeExample: `// 条件判断语句
  const age = 18;
  const hasLicense = true;
  
  // if-else条件
  if (age >= 18 && hasLicense) {
    console.log('可以开车');
  } else if (age >= 18) {
    console.log('需要考驾照');
  } else {
    console.log('年龄不够');
  }
  
  // 三元运算符
  const message = age >= 18 ? '成年人' : '未成年';`,
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 33,
    english: "parameter",
    chinese: "参数",
    phonetic: "/pəˈræmɪtər/",
    explanation: "传递给函数的值",
    example: "Pass the username as a parameter.",
    codeExample: `// 函数参数的使用
  function greetUser(name, age, country = '中国') {
    return \`你好 \${name}，你今年\${age}岁，来自\${country}\`;
  }
  
  // 调用函数并传递参数
  const greeting1 = greetUser('张三', 25);
  const greeting2 = greetUser('李四', 30, '美国');
  
  // 解构参数
  function createUser({name, email, age}) {
    return {name, email, age, id: Date.now()};
  }`,
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 34,
    english: "return",
    chinese: "返回",
    phonetic: "/rɪˈtɝːn/",
    explanation: "函数输出结果的关键字",
    example: "The function should return a boolean value.",
    codeExample: `// 函数返回值的使用
  function checkPassword(password) {
    if (password.length < 8) {
      return false;  // 提前返回
    }
    return true;     // 正常返回
  }
  
  // 返回对象
  function getUserInfo(id) {
    return {
      id: id,
      name: '用户' + id,
      created: new Date()
    };
  }
  
  const isValid = checkPassword('12345678');
  const user = getUserInfo(123);`,
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 35,
    english: "boolean",
    chinese: "布尔值",
    explanation: "只有true或false两个值的数据类型",
    example: "The function returns a boolean result.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 36,
    english: "integer",
    chinese: "整数",
    explanation: "没有小数部分的数字",
    example: "Store the age as an integer variable.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 37,
    english: "string",
    chinese: "字符串",
    explanation: "文本数据类型",
    example: "Concatenate two strings together.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 38,
    english: "array",
    chinese: "数组",
    explanation: "存储多个值的数据结构",
    example: "Create an array of student names.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 39,
    english: "object",
    chinese: "对象",
    explanation: "键值对的数据结构",
    example: "Store user information in an object.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 40,
    english: "constant",
    chinese: "常量",
    explanation: "值不能改变的变量",
    example: "Define PI as a constant value.",
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 41,
    english: "DOM",
    chinese: "文档对象模型",
    explanation: "HTML文档的编程接口",
    example: "Manipulate the DOM with JavaScript.",
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 42,
    english: "scope",
    chinese: "作用域",
    phonetic: "/skoʊp/",
    explanation: "变量的可访问范围",
    example: "Variables have different scope in JavaScript.",
    codeExample: `// 不同作用域的变量
  const globalVar = '全局变量';
  
  function outerFunction() {
    const outerVar = '外层函数变量';
    
    function innerFunction() {
      const innerVar = '内层函数变量';
      
      // 可以访问所有变量
      console.log(globalVar);  // ✓ 可访问
      console.log(outerVar);   // ✓ 可访问  
      console.log(innerVar);   // ✓ 可访问
    }
    
    // console.log(innerVar);  // ✗ 无法访问
  }`,
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 43,
    english: "algorithm",
    chinese: "算法",
    phonetic: "/ˈælɡərɪðəm/",
    explanation: "解决问题的步骤和方法",
    example: "This sorting algorithm is very efficient.",
    codeExample: `// 简单的排序算法示例
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // 交换元素
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }`,
    category: "HTML/CSS",
    difficulty: "easy"
  },
  {
    id: 44,
    english: "iteration",
    chinese: "迭代",
    phonetic: "/ˌɪtəˈreɪʃən/",
    explanation: "重复执行过程的每一次循环",
    example: "Each iteration processes one element.",
    codeExample: `// 迭代的不同方式
  const numbers = [1, 2, 3, 4, 5];
  
  // for循环迭代
  for (let i = 0; i < numbers.length; i++) {
    console.log(\`第\${i+1}次迭代: \${numbers[i]}\`);
  }
  
  // 数组迭代方法
  numbers.forEach((num, index) => {
    console.log(\`索引\${index}: \${num}\`);
  });
  
  // for...of迭代
  for (const num of numbers) {
    console.log('当前值:', num);
  }`,
    category: "HTML/CSS",
    difficulty: "medium"
  },
  {
    id: 45,
    english: "JavaScript",
    chinese: "JavaScript",
    explanation: "网页交互的编程语言",
    example: "JavaScript makes websites interactive.",
    category: "HTML/CSS",
    difficulty: "easy"
  },

  // === 第3组：JavaScript核心 (25个) - 你正在学 ===
  {
    id: 46,
    english: "recursion",
    chinese: "递归",
    phonetic: "/rɪˈkɝːʒən/",
    explanation: "函数调用自身的编程技术",
    example: "Use recursion to solve the factorial problem.",
    codeExample: `// 递归函数示例
  function factorial(n) {
    // 基础情况（终止条件）
    if (n <= 1) {
      return 1;
    }
    // 递归调用
    return n * factorial(n - 1);
  }
  
  // 斐波那契数列递归
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(factorial(5));   // 120
  console.log(fibonacci(7));   // 13`,
    category: "JavaScript",
    difficulty: "hard"
  },
  {
    id: 47,
    english: "async",
    chinese: "异步",
    explanation: "不阻塞程序执行的操作",
    example: "Use async/await for API calls.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 48,
    english: "await",
    chinese: "等待",
    explanation: "等待异步操作完成的关键字",
    example: "Await the API response before proceeding.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 49,
    english: "promise",
    chinese: "承诺",
    explanation: "JavaScript中处理异步操作的对象",
    example: "The API call returns a Promise.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 50,
    english: "callback",
    chinese: "回调函数",
    explanation: "作为参数传递的函数",
    example: "Pass a callback function to handle the result.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 51,
    english: "fetch",
    chinese: "获取",
    explanation: "JavaScript中进行网络请求的函数",
    example: "Use fetch to call the API endpoint.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 52,
    english: "JSON",
    chinese: "JSON格式",
    explanation: "轻量级数据交换格式",
    example: "API returns data in JSON format.",
    category: "JavaScript",
    difficulty: "easy"
  },
  {
    id: 53,
    english: "event handler",
    chinese: "事件处理器",
    explanation: "响应用户交互的函数",
    example: "Add onClick event handler to the button.",
    category: "JavaScript",
    difficulty: "easy"
  },
  {
    id: 54,
    english: "data structure",
    chinese: "数据结构",
    explanation: "组织和存储数据的方式",
    example: "Choose the right data structure for efficiency.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 55,
    english: "stack",
    chinese: "栈",
    explanation: "后进先出的数据结构",
    example: "Use a stack for undo functionality.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 56,
    english: "queue",
    chinese: "队列",
    explanation: "先进先出的数据结构",
    example: "Process tasks using a queue system.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 57,
    english: "linked list",
    chinese: "链表",
    explanation: "通过指针连接的数据结构",
    example: "Implement a linked list in JavaScript.",
    category: "JavaScript",
    difficulty: "hard"
  },
  {
    id: 58,
    english: "tree",
    chinese: "树",
    explanation: "分层的数据结构",
    example: "File systems use tree structures.",
    category: "JavaScript",
    difficulty: "hard"
  },
  {
    id: 59,
    english: "hash table",
    chinese: "哈希表",
    explanation: "快速查找的数据结构",
    example: "Hash tables provide O(1) lookup time.",
    category: "JavaScript",
    difficulty: "hard"
  },
  {
    id: 60,
    english: "sort",
    chinese: "排序",
    explanation: "按顺序排列数据元素",
    example: "Sort the array in ascending order.",
    category: "JavaScript",
    difficulty: "easy"
  },
  {
    id: 61,
    english: "search",
    chinese: "搜索",
    explanation: "在数据中找到特定元素",
    example: "Binary search is very efficient.",
    category: "JavaScript",
    difficulty: "easy"
  },
  {
    id: 62,
    english: "binary search",
    chinese: "二分查找",
    explanation: "在有序数组中快速查找的算法",
    example: "Binary search divides the search space.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 63,
    english: "complexity",
    chinese: "复杂度",
    explanation: "算法效率的度量",
    example: "Analyze the time complexity of the algorithm.",
    category: "JavaScript",
    difficulty: "hard"
  },
  {
    id: 64,
    english: "Big O",
    chinese: "大O记号",
    explanation: "描述算法复杂度的数学记号",
    example: "This algorithm has O(n) time complexity.",
    category: "JavaScript",
    difficulty: "hard"
  },
  {
    id: 65,
    english: "optimization",
    chinese: "优化",
    explanation: "改进算法或代码性能",
    example: "Code optimization reduces execution time.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 66,
    english: "graph",
    chinese: "图",
    explanation: "节点和边组成的数据结构",
    example: "Social networks can be modeled as graphs.",
    category: "JavaScript",
    difficulty: "hard"
  },
  {
    id: 67,
    english: "dynamic programming",
    chinese: "动态规划",
    explanation: "解决复杂问题的算法技术",
    example: "Use dynamic programming for optimization.",
    category: "JavaScript",
    difficulty: "hard"
  },
  {
    id: 68,
    english: "bundle",
    chinese: "打包",
    explanation: "将多个文件合并的过程",
    example: "Bundle JavaScript files for production.",
    category: "JavaScript",
    difficulty: "medium"
  },
  {
    id: 69,
    english: "webpack",
    chinese: "Webpack打包工具",
    explanation: "模块打包工具",
    example: "Configure webpack for the build process.",
    category: "JavaScript",
    difficulty: "hard"
  },
  {
    id: 70,
    english: "npm",
    chinese: "Node包管理器",
    explanation: "JavaScript包管理工具",
    example: "Install dependencies using npm.",
    category: "JavaScript",
    difficulty: "easy"
  },

  // === 第4组：Tailwind实用 (12个) - 你正在学 ===
  {
    id: 71,
    english: "utility",
    chinese: "工具类",
    explanation: "功能性CSS类",
    example: "Tailwind uses utility classes for styling.",
    category: "Tailwind",
    difficulty: "medium"
  },
  {
    id: 72,
    english: "class",
    chinese: "类名",
    explanation: "HTML的class属性",
    example: "Add CSS classes to style elements.",
    category: "Tailwind",
    difficulty: "easy"
  },
  {
    id: 73,
    english: "prefix",
    chinese: "前缀",
    explanation: "类名的前缀",
    example: "Use responsive prefixes like sm: md: lg:",
    category: "Tailwind",
    difficulty: "medium"
  },
  {
    id: 74,
    english: "modifier",
    chinese: "修饰符",
    explanation: "响应式/状态修饰符",
    example: "Use hover: modifier for hover states.",
    category: "Tailwind",
    difficulty: "medium"
  },
  {
    id: 75,
    english: "breakpoint",
    chinese: "断点",
    explanation: "屏幕尺寸断点",
    example: "Define custom breakpoints for responsive design.",
    category: "Tailwind",
    difficulty: "medium"
  },
  {
    id: 76,
    english: "hover",
    chinese: "悬停",
    explanation: "鼠标悬停状态",
    example: "Add hover effects with hover: modifier.",
    category: "Tailwind",
    difficulty: "easy"
  },
  {
    id: 77,
    english: "focus",
    chinese: "焦点",
    explanation: "输入框焦点状态",
    example: "Style focus states for better UX.",
    category: "Tailwind",
    difficulty: "easy"
  },
  {
    id: 78,
    english: "active",
    chinese: "激活",
    explanation: "元素激活状态",
    example: "Style active button states.",
    category: "Tailwind",
    difficulty: "easy"
  },
  {
    id: 79,
    english: "dark",
    chinese: "暗色",
    explanation: "暗色模式",
    example: "Use dark: modifier for dark mode styles.",
    category: "Tailwind",
    difficulty: "medium"
  },
  {
    id: 80,
    english: "spacing",
    chinese: "间距",
    explanation: "margin和padding",
    example: "Control spacing with margin and padding utilities.",
    category: "Tailwind",
    difficulty: "easy"
  },
  {
    id: 81,
    english: "sizing",
    chinese: "尺寸",
    explanation: "width和height",
    example: "Use sizing utilities for responsive layouts.",
    category: "Tailwind",
    difficulty: "easy"
  },
  {
    id: 82,
    english: "gradient",
    chinese: "渐变",
    explanation: "颜色渐变效果",
    example: "Create beautiful gradients with Tailwind.",
    category: "Tailwind",
    difficulty: "medium"
  },

  // === 第5组：Next.js重点 (20个) - 非常重要！ ===
  {
    id: 83,
    english: "component",
    chinese: "组件",
    explanation: "可重用的UI构建块",
    example: "Create a reusable Button component.",
    category: "Next.js",
    difficulty: "easy"
  },
  {
    id: 84,
    english: "useState",
    chinese: "状态钩子",
    explanation: "React中管理组件状态的Hook",
    example: "Use useState to track the counter value.",
    category: "Next.js",
    difficulty: "medium"
  },
  {
    id: 85,
    english: "useEffect",
    chinese: "副作用钩子",
    explanation: "处理组件副作用的Hook",
    example: "useEffect runs after component renders.",
    category: "Next.js",
    difficulty: "medium"
  },
  {
    id: 86,
    english: "props",
    chinese: "属性",
    explanation: "传递给组件的数据",
    example: "Pass data to child component via props.",
    category: "Next.js",
    difficulty: "easy"
  },
  {
    id: 87,
    english: "state",
    chinese: "状态",
    explanation: "组件内部可变的数据",
    example: "Update component state when button clicked.",
    category: "Next.js",
    difficulty: "easy"
  },
  {
    id: 88,
    english: "JSX",
    chinese: "JSX语法",
    explanation: "JavaScript中编写HTML的语法",
    example: "JSX makes React components more readable.",
    category: "Next.js",
    difficulty: "easy"
  },
  {
    id: 89,
    english: "render",
    chinese: "渲染",
    explanation: "将组件转换为DOM元素",
    example: "React renders components to the screen.",
    category: "Next.js",
    difficulty: "easy"
  },
  {
    id: 90,
    english: "lifecycle",
    chinese: "生命周期",
    explanation: "组件从创建到销毁的过程",
    example: "Component lifecycle methods in React.",
    category: "Next.js",
    difficulty: "medium"
  },
  {
    id: 91,
    english: "hook",
    chinese: "钩子",
    explanation: "React中使用状态和其他特性的函数",
    example: "Custom hooks help reuse stateful logic.",
    category: "Next.js",
    difficulty: "medium"
  },
  {
    id: 92,
    english: "virtual DOM",
    chinese: "虚拟DOM",
    explanation: "React中DOM的JavaScript表示",
    example: "Virtual DOM improves React performance.",
    category: "Next.js",
    difficulty: "hard"
  },
  {
    id: 93,
    english: "routing",
    chinese: "路由",
    explanation: "管理应用不同页面的导航",
    example: "Use React Router for client-side routing.",
    category: "Next.js",
    difficulty: "medium"
  },
  {
    id: 94,
    english: "context",
    chinese: "上下文",
    explanation: "React中跨组件共享数据的方法",
    example: "Use Context to avoid prop drilling.",
    category: "Next.js",
    difficulty: "hard"
  },
  {
    id: 95,
    english: "reducer",
    chinese: "减少器",
    explanation: "管理复杂状态变化的函数",
    example: "useReducer for complex state management.",
    category: "Next.js",
    difficulty: "hard"
  },
  {
    id: 96,
    english: "memo",
    chinese: "记忆化",
    explanation: "优化组件性能的技术",
    example: "React.memo prevents unnecessary re-renders.",
    category: "Next.js",
    difficulty: "hard"
  },
  {
    id: 97,
    english: "ref",
    chinese: "引用",
    explanation: "直接访问DOM元素的方法",
    example: "Use useRef to focus the input field.",
    category: "Next.js",
    difficulty: "medium"
  },
  {
    id: 98,
    english: "fragment",
    chinese: "片段",
    explanation: "包装多个元素而不添加额外DOM节点",
    example: "Use Fragment to group elements.",
    category: "Next.js",
    difficulty: "medium"
  },
  {
    id: 99,
    english: "portal",
    chinese: "传送门",
    explanation: "将子组件渲染到其他DOM节点",
    example: "Use Portal for modal components.",
    category: "Next.js",
    difficulty: "hard"
  },
  {
    id: 100,
    english: "suspense",
    chinese: "悬念",
    explanation: "处理异步组件加载的机制",
    example: "Suspense shows fallback while loading.",
    category: "Next.js",
    difficulty: "hard"
  },
  {
    id: 101,
    english: "Next.js",
    chinese: "Next.js框架",
    explanation: "基于React的全栈Web框架",
    example: "Next.js provides server-side rendering.",
    category: "Next.js",
    difficulty: "medium"
  },
  {
    id: 102,
    english: "server-side",
    chinese: "服务端",
    explanation: "在服务器上执行的代码",
    example: "Server-side rendering improves SEO.",
    category: "Next.js",
    difficulty: "medium"
  },

  // === 第6组：数据库预备 (15个) - 即将学习 ===
  {
    id: 103,
    english: "database",
    chinese: "数据库",
    explanation: "组织存储数据的系统",
    example: "Store user data in the database.",
    category: "数据库",
    difficulty: "easy"
  },
  {
    id: 104,
    english: "SQL",
    chinese: "结构化查询语言",
    explanation: "管理关系数据库的语言",
    example: "Write SQL queries to retrieve data.",
    category: "数据库",
    difficulty: "medium"
  },
  {
    id: 105,
    english: "table",
    chinese: "表",
    explanation: "数据库中存储数据的结构",
    example: "Create a users table in the database.",
    category: "数据库",
    difficulty: "easy"
  },
  {
    id: 106,
    english: "record",
    chinese: "记录",
    explanation: "数据库表中的一行数据",
    example: "Insert a new record into the table.",
    category: "数据库",
    difficulty: "easy"
  },
  {
    id: 107,
    english: "query",
    chinese: "查询",
    explanation: "从数据库检索数据的请求",
    example: "Execute a query to find all users.",
    category: "数据库",
    difficulty: "easy"
  },
  {
    id: 108,
    english: "schema",
    chinese: "模式",
    explanation: "数据库结构的定义",
    example: "Design the database schema carefully.",
    category: "数据库",
    difficulty: "medium"
  },
  {
    id: 109,
    english: "primary key",
    chinese: "主键",
    explanation: "唯一标识记录的字段",
    example: "Use ID as the primary key for the table.",
    category: "数据库",
    difficulty: "medium"
  },
  {
    id: 110,
    english: "foreign key",
    chinese: "外键",
    explanation: "连接不同表的字段",
    example: "Foreign key maintains referential integrity.",
    category: "数据库",
    difficulty: "medium"
  },
  {
    id: 111,
    english: "index",
    chinese: "索引",
    explanation: "提高查询速度的数据库结构",
    example: "Create an index on the email column.",
    category: "数据库",
    difficulty: "medium"
  },
  {
    id: 112,
    english: "migration",
    chinese: "迁移",
    explanation: "数据库结构变更的管理",
    example: "Run database migrations to update schema.",
    category: "数据库",
    difficulty: "hard"
  },
  {
    id: 113,
    english: "API",
    chinese: "应用程序接口",
    explanation: "不同软件组件之间的接口",
    example: "Use the weather API to get forecast data.",
    category: "数据库",
    difficulty: "easy"
  },
  {
    id: 114,
    english: "REST",
    chinese: "REST架构",
    explanation: "网络应用设计的架构风格",
    example: "Design a RESTful API for the application.",
    category: "数据库",
    difficulty: "medium"
  },
  {
    id: 115,
    english: "endpoint",
    chinese: "端点",
    explanation: "API的访问地址",
    example: "The login endpoint is /api/auth/login.",
    category: "数据库",
    difficulty: "easy"
  },
  {
    id: 116,
    english: "HTTP",
    chinese: "超文本传输协议",
    explanation: "Web通信的基础协议",
    example: "HTTP requests transfer data over the web.",
    category: "数据库",
    difficulty: "easy"
  },
  {
    id: 117,
    english: "authentication",
    chinese: "身份验证",
    explanation: "验证用户身份的过程",
    example: "Add authentication to protect the API.",
    category: "数据库",
    difficulty: "medium"
  },

  // === 第7组：进阶概念 (33个) - 未来需要 ===
  {
    id: 118,
    english: "GET",
    chinese: "GET请求",
    explanation: "获取数据的HTTP方法",
    example: "Use GET request to fetch user information.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 119,
    english: "POST",
    chinese: "POST请求",
    explanation: "发送数据的HTTP方法",
    example: "POST request to create a new user account.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 120,
    english: "CORS",
    chinese: "跨域资源共享",
    explanation: "允许跨域请求的机制",
    example: "Configure CORS to allow API access.",
    category: "进阶概念",
    difficulty: "hard"
  },
  {
    id: 121,
    english: "token",
    chinese: "令牌",
    explanation: "身份验证的凭证",
    example: "Include the access token in API requests.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 122,
    english: "Git",
    chinese: "Git版本控制",
    explanation: "分布式版本控制系统",
    example: "Use Git to track code changes.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 123,
    english: "commit",
    chinese: "提交",
    explanation: "保存代码更改的操作",
    example: "Commit your changes with a clear message.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 124,
    english: "branch",
    chinese: "分支",
    explanation: "代码的并行开发线",
    example: "Create a new branch for the feature.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 125,
    english: "merge",
    chinese: "合并",
    explanation: "将不同分支的代码合并",
    example: "Merge the feature branch into main.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 126,
    english: "repository",
    chinese: "仓库",
    explanation: "存储项目代码的地方",
    example: "Clone the repository to your local machine.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 127,
    english: "clone",
    chinese: "克隆",
    explanation: "复制远程仓库到本地",
    example: "Clone the GitHub repository.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 128,
    english: "push",
    chinese: "推送",
    explanation: "将本地更改上传到远程仓库",
    example: "Push your commits to the remote repository.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 129,
    english: "pull",
    chinese: "拉取",
    explanation: "从远程仓库获取最新更改",
    example: "Pull the latest changes before starting work.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 130,
    english: "conflict",
    chinese: "冲突",
    explanation: "不同更改之间的矛盾",
    example: "Resolve merge conflicts manually.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 131,
    english: "GitHub",
    chinese: "GitHub平台",
    explanation: "基于Git的代码托管平台",
    example: "Host your project on GitHub.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 132,
    english: "test",
    chinese: "测试",
    explanation: "验证代码功能正确性",
    example: "Write tests for all critical functions.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 133,
    english: "unit test",
    chinese: "单元测试",
    explanation: "测试单个函数或组件",
    example: "Unit tests verify individual components.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 134,
    english: "integration test",
    chinese: "集成测试",
    explanation: "测试组件间的协作",
    example: "Integration tests check component interaction.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 135,
    english: "mock",
    chinese: "模拟",
    explanation: "测试中替代真实依赖的对象",
    example: "Mock the API call in unit tests.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 136,
    english: "assertion",
    chinese: "断言",
    explanation: "测试中验证结果的语句",
    example: "Add assertions to verify the output.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 137,
    english: "coverage",
    chinese: "覆盖率",
    explanation: "测试覆盖代码的比例",
    example: "Aim for high test coverage in your project.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 138,
    english: "bug",
    chinese: "漏洞/错误",
    explanation: "程序中的错误或缺陷",
    example: "Fix the bug in the login function.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 139,
    english: "regression",
    chinese: "回归",
    explanation: "新更改导致的旧功能失效",
    example: "Regression tests prevent breaking existing features.",
    category: "进阶概念",
    difficulty: "hard"
  },
  {
    id: 140,
    english: "validation",
    chinese: "验证",
    explanation: "检查输入数据的正确性",
    example: "Add input validation for the form.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 141,
    english: "error handling",
    chinese: "错误处理",
    explanation: "处理程序执行中错误的机制",
    example: "Implement proper error handling in the API.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 142,
    english: "deployment",
    chinese: "部署",
    explanation: "将应用发布到生产环境",
    example: "Automate the deployment process.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 143,
    english: "server",
    chinese: "服务器",
    explanation: "提供服务的计算机系统",
    example: "Deploy the application to a web server.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 144,
    english: "hosting",
    chinese: "托管",
    explanation: "提供服务器服务的服务",
    example: "Choose a reliable hosting provider.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 145,
    english: "domain",
    chinese: "域名",
    explanation: "网站的网络地址",
    example: "Register a domain name for your website.",
    category: "进阶概念",
    difficulty: "easy"
  },
  {
    id: 146,
    english: "SSL",
    chinese: "安全套接字层",
    explanation: "网络通信加密协议",
    example: "Enable SSL certificate for HTTPS.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 147,
    english: "CDN",
    chinese: "内容分发网络",
    explanation: "加速内容传输的网络",
    example: "Use CDN to improve website performance.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 148,
    english: "cache",
    chinese: "缓存",
    explanation: "临时存储数据提高性能",
    example: "Implement caching to reduce load times.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 149,
    english: "security",
    chinese: "安全",
    explanation: "保护系统免受威胁",
    example: "Implement security best practices.",
    category: "进阶概念",
    difficulty: "medium"
  },
  {
    id: 150,
    english: "performance",
    chinese: "性能",
    explanation: "系统运行的效率",
    example: "Optimize performance for better user experience.",
    category: "进阶概念",
    difficulty: "easy"
  }
]

// 导出词汇统计信息
export const wordStats = {
  total: words.length,
  categories: {
    "开发环境": words.filter(w => w.category === "开发环境").length,
    "HTML/CSS": words.filter(w => w.category === "HTML/CSS").length,
    "JavaScript": words.filter(w => w.category === "JavaScript").length,
    "Tailwind": words.filter(w => w.category === "Tailwind").length,
    "Next.js": words.filter(w => w.category === "Next.js").length,
    "数据库": words.filter(w => w.category === "数据库").length,
    "进阶概念": words.filter(w => w.category === "进阶概念").length,
  },
  difficulties: {
    easy: words.filter(w => w.difficulty === "easy").length,
    medium: words.filter(w => w.difficulty === "medium").length,
    hard: words.filter(w => w.difficulty === "hard").length,
  }
}