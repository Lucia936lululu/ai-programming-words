// 完整的编程英语词汇库 - 150个精选词汇
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
    // === 基础编程概念 (20个) ===
    {
        id: 1,
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
        category: "基础概念",
        difficulty: "easy"
      },
      {
        id: 2,
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
        category: "基础概念",
        difficulty: "easy"
      },
      {
        id: 3,
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
        category: "基础概念",
        difficulty: "easy"
      },
      {
        id: 4,
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
        category: "基础概念",
        difficulty: "easy"
      },
      {
        id: 5,
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
        category: "基础概念",
        difficulty: "easy"
      },
      {
        id: 6,
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
        category: "基础概念",
        difficulty: "easy"
      },
      {
        id: 7,
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
        category: "基础概念",
        difficulty: "easy"
      },
      {
        id: 8,
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
        category: "基础概念",
        difficulty: "medium"
      },
      {
        id: 9,
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
        category: "基础概念",
        difficulty: "hard"
      },
      {
        id: 10,
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
        category: "基础概念",
        difficulty: "medium"
      },
    {
      id: 11,
      english: "syntax",
      chinese: "语法",
      explanation: "编程语言的规则和结构",
      example: "Check the syntax error in line 15.",
      category: "基础概念",
      difficulty: "easy"
    },
    {
      id: 12,
      english: "compile",
      chinese: "编译",
      explanation: "将源代码转换为机器代码",
      example: "Compile the C++ program before running.",
      category: "基础概念",
      difficulty: "medium"
    },
    {
      id: 13,
      english: "debug",
      chinese: "调试",
      explanation: "查找和修复代码错误",
      example: "Use console.log to debug the application.",
      category: "基础概念",
      difficulty: "easy"
    },
    {
      id: 14,
      english: "runtime",
      chinese: "运行时",
      explanation: "程序执行期间的环境",
      example: "A runtime error occurred during execution.",
      category: "基础概念",
      difficulty: "medium"
    },
    {
      id: 15,
      english: "exception",
      chinese: "异常",
      explanation: "程序执行中的错误情况",
      example: "Handle the exception with try-catch block.",
      category: "基础概念",
      difficulty: "medium"
    },
    {
      id: 16,
      english: "constant",
      chinese: "常量",
      explanation: "值不能改变的变量",
      example: "Define PI as a constant value.",
      category: "基础概念",
      difficulty: "easy"
    },
    {
      id: 17,
      english: "boolean",
      chinese: "布尔值",
      explanation: "只有true或false两个值的数据类型",
      example: "The function returns a boolean result.",
      category: "基础概念",
      difficulty: "easy"
    },
    {
      id: 18,
      english: "integer",
      chinese: "整数",
      explanation: "没有小数部分的数字",
      example: "Store the age as an integer variable.",
      category: "基础概念",
      difficulty: "easy"
    },
    {
      id: 19,
      english: "string",
      chinese: "字符串",
      explanation: "文本数据类型",
      example: "Concatenate two strings together.",
      category: "基础概念",
      difficulty: "easy"
    },
    {
      id: 20,
      english: "array",
      chinese: "数组",
      explanation: "存储多个值的数据结构",
      example: "Create an array of student names.",
      category: "基础概念",
      difficulty: "easy"
    },
  
    // === Web开发基础 (15个) ===
    {
      id: 21,
      english: "HTML",
      chinese: "超文本标记语言",
      explanation: "构建网页结构的标记语言",
      example: "Write semantic HTML for better accessibility.",
      category: "Web开发",
      difficulty: "easy"
    },
    {
      id: 22,
      english: "CSS",
      chinese: "层叠样式表",
      explanation: "控制网页样式和布局的语言",
      example: "Use CSS Grid for responsive layouts.",
      category: "Web开发",
      difficulty: "easy"
    },
    {
      id: 23,
      english: "JavaScript",
      chinese: "JavaScript",
      explanation: "网页交互的编程语言",
      example: "JavaScript makes websites interactive.",
      category: "Web开发",
      difficulty: "easy"
    },
    {
      id: 24,
      english: "DOM",
      chinese: "文档对象模型",
      explanation: "HTML文档的编程接口",
      example: "Manipulate the DOM with JavaScript.",
      category: "Web开发",
      difficulty: "medium"
    },
    {
      id: 25,
      english: "element",
      chinese: "元素",
      explanation: "HTML文档的基本构建块",
      example: "Select the button element by its ID.",
      category: "Web开发",
      difficulty: "easy"
    },
    {
      id: 26,
      english: "attribute",
      chinese: "属性",
      explanation: "HTML元素的特性设置",
      example: "Set the src attribute for the image.",
      category: "Web开发",
      difficulty: "easy"
    },
    {
      id: 27,
      english: "selector",
      chinese: "选择器",
      explanation: "CSS中选择HTML元素的方法",
      example: "Use class selector to style elements.",
      category: "Web开发",
      difficulty: "easy"
    },
    {
      id: 28,
      english: "responsive",
      chinese: "响应式",
      explanation: "适应不同设备屏幕的设计",
      example: "Create a responsive navigation menu.",
      category: "Web开发",
      difficulty: "medium"
    },
    {
      id: 29,
      english: "viewport",
      chinese: "视口",
      explanation: "浏览器显示网页的可见区域",
      example: "Set the viewport meta tag for mobile.",
      category: "Web开发",
      difficulty: "medium"
    },
    {
      id: 30,
      english: "semantic",
      chinese: "语义化",
      explanation: "使用有意义的HTML标签",
      example: "Use semantic HTML tags like header and nav.",
      category: "Web开发",
      difficulty: "medium"
    },
    {
      id: 31,
      english: "accessibility",
      chinese: "可访问性",
      explanation: "让所有用户都能使用的设计",
      example: "Improve accessibility with ARIA labels.",
      category: "Web开发",
      difficulty: "medium"
    },
    {
      id: 32,
      english: "browser",
      chinese: "浏览器",
      explanation: "访问网页的软件应用",
      example: "Test the website in different browsers.",
      category: "Web开发",
      difficulty: "easy"
    },
    {
      id: 33,
      english: "flexbox",
      chinese: "弹性盒子",
      explanation: "CSS布局方法",
      example: "Use flexbox to center the content.",
      category: "Web开发",
      difficulty: "medium"
    },
    {
      id: 34,
      english: "grid",
      chinese: "网格",
      explanation: "CSS二维布局系统",
      example: "CSS Grid is perfect for complex layouts.",
      category: "Web开发",
      difficulty: "medium"
    },
    {
      id: 35,
      english: "media query",
      chinese: "媒体查询",
      explanation: "CSS响应式设计的关键技术",
      example: "Use media queries for mobile styles.",
      category: "Web开发",
      difficulty: "medium"
    },
  
    // === React/前端框架 (20个) ===
    {
      id: 36,
      english: "component",
      chinese: "组件",
      explanation: "可重用的UI构建块",
      example: "Create a reusable Button component.",
      category: "React",
      difficulty: "easy"
    },
    {
      id: 37,
      english: "useState",
      chinese: "状态钩子",
      explanation: "React中管理组件状态的Hook",
      example: "Use useState to track the counter value.",
      category: "React",
      difficulty: "medium"
    },
    {
      id: 38,
      english: "useEffect",
      chinese: "副作用钩子",
      explanation: "处理组件副作用的Hook",
      example: "useEffect runs after component renders.",
      category: "React",
      difficulty: "medium"
    },
    {
      id: 39,
      english: "props",
      chinese: "属性",
      explanation: "传递给组件的数据",
      example: "Pass data to child component via props.",
      category: "React",
      difficulty: "easy"
    },
    {
      id: 40,
      english: "state",
      chinese: "状态",
      explanation: "组件内部可变的数据",
      example: "Update component state when button clicked.",
      category: "React",
      difficulty: "easy"
    },
    {
      id: 41,
      english: "JSX",
      chinese: "JSX语法",
      explanation: "JavaScript中编写HTML的语法",
      example: "JSX makes React components more readable.",
      category: "React",
      difficulty: "easy"
    },
    {
      id: 42,
      english: "render",
      chinese: "渲染",
      explanation: "将组件转换为DOM元素",
      example: "React renders components to the screen.",
      category: "React",
      difficulty: "easy"
    },
    {
      id: 43,
      english: "lifecycle",
      chinese: "生命周期",
      explanation: "组件从创建到销毁的过程",
      example: "Component lifecycle methods in React.",
      category: "React",
      difficulty: "medium"
    },
    {
      id: 44,
      english: "hook",
      chinese: "钩子",
      explanation: "React中使用状态和其他特性的函数",
      example: "Custom hooks help reuse stateful logic.",
      category: "React",
      difficulty: "medium"
    },
    {
      id: 45,
      english: "virtual DOM",
      chinese: "虚拟DOM",
      explanation: "React中DOM的JavaScript表示",
      example: "Virtual DOM improves React performance.",
      category: "React",
      difficulty: "hard"
    },
    {
      id: 46,
      english: "event handler",
      chinese: "事件处理器",
      explanation: "响应用户交互的函数",
      example: "Add onClick event handler to the button.",
      category: "React",
      difficulty: "easy"
    },
    {
      id: 47,
      english: "routing",
      chinese: "路由",
      explanation: "管理应用不同页面的导航",
      example: "Use React Router for client-side routing.",
      category: "React",
      difficulty: "medium"
    },
    {
      id: 48,
      english: "context",
      chinese: "上下文",
      explanation: "React中跨组件共享数据的方法",
      example: "Use Context to avoid prop drilling.",
      category: "React",
      difficulty: "hard"
    },
    {
      id: 49,
      english: "reducer",
      chinese: "减少器",
      explanation: "管理复杂状态变化的函数",
      example: "useReducer for complex state management.",
      category: "React",
      difficulty: "hard"
    },
    {
      id: 50,
      english: "memo",
      chinese: "记忆化",
      explanation: "优化组件性能的技术",
      example: "React.memo prevents unnecessary re-renders.",
      category: "React",
      difficulty: "hard"
    },
    {
      id: 51,
      english: "ref",
      chinese: "引用",
      explanation: "直接访问DOM元素的方法",
      example: "Use useRef to focus the input field.",
      category: "React",
      difficulty: "medium"
    },
    {
      id: 52,
      english: "fragment",
      chinese: "片段",
      explanation: "包装多个元素而不添加额外DOM节点",
      example: "Use Fragment to group elements.",
      category: "React",
      difficulty: "medium"
    },
    {
      id: 53,
      english: "portal",
      chinese: "传送门",
      explanation: "将子组件渲染到其他DOM节点",
      example: "Use Portal for modal components.",
      category: "React",
      difficulty: "hard"
    },
    {
      id: 54,
      english: "suspense",
      chinese: "悬念",
      explanation: "处理异步组件加载的机制",
      example: "Suspense shows fallback while loading.",
      category: "React",
      difficulty: "hard"
    },
    {
      id: 55,
      english: "Next.js",
      chinese: "Next.js框架",
      explanation: "基于React的全栈Web框架",
      example: "Next.js provides server-side rendering.",
      category: "React",
      difficulty: "medium"
    },
  
    // === 数据结构与算法 (15个) ===
    {
      id: 56,
      english: "data structure",
      chinese: "数据结构",
      explanation: "组织和存储数据的方式",
      example: "Choose the right data structure for efficiency.",
      category: "数据结构",
      difficulty: "medium"
    },
    {
      id: 57,
      english: "object",
      chinese: "对象",
      explanation: "键值对的数据结构",
      example: "Store user information in an object.",
      category: "数据结构",
      difficulty: "easy"
    },
    {
      id: 58,
      english: "stack",
      chinese: "栈",
      explanation: "后进先出的数据结构",
      example: "Use a stack for undo functionality.",
      category: "数据结构",
      difficulty: "medium"
    },
    {
      id: 59,
      english: "queue",
      chinese: "队列",
      explanation: "先进先出的数据结构",
      example: "Process tasks using a queue system.",
      category: "数据结构",
      difficulty: "medium"
    },
    {
      id: 60,
      english: "linked list",
      chinese: "链表",
      explanation: "通过指针连接的数据结构",
      example: "Implement a linked list in JavaScript.",
      category: "数据结构",
      difficulty: "hard"
    },
    {
      id: 61,
      english: "tree",
      chinese: "树",
      explanation: "分层的数据结构",
      example: "File systems use tree structures.",
      category: "数据结构",
      difficulty: "hard"
    },
    {
      id: 62,
      english: "hash table",
      chinese: "哈希表",
      explanation: "快速查找的数据结构",
      example: "Hash tables provide O(1) lookup time.",
      category: "数据结构",
      difficulty: "hard"
    },
    {
      id: 63,
      english: "sort",
      chinese: "排序",
      explanation: "按顺序排列数据元素",
      example: "Sort the array in ascending order.",
      category: "数据结构",
      difficulty: "easy"
    },
    {
      id: 64,
      english: "search",
      chinese: "搜索",
      explanation: "在数据中找到特定元素",
      example: "Binary search is very efficient.",
      category: "数据结构",
      difficulty: "easy"
    },
    {
      id: 65,
      english: "binary search",
      chinese: "二分查找",
      explanation: "在有序数组中快速查找的算法",
      example: "Binary search divides the search space.",
      category: "数据结构",
      difficulty: "medium"
    },
    {
      id: 66,
      english: "complexity",
      chinese: "复杂度",
      explanation: "算法效率的度量",
      example: "Analyze the time complexity of the algorithm.",
      category: "数据结构",
      difficulty: "hard"
    },
    {
      id: 67,
      english: "Big O",
      chinese: "大O记号",
      explanation: "描述算法复杂度的数学记号",
      example: "This algorithm has O(n) time complexity.",
      category: "数据结构",
      difficulty: "hard"
    },
    {
      id: 68,
      english: "optimization",
      chinese: "优化",
      explanation: "改进算法或代码性能",
      example: "Code optimization reduces execution time.",
      category: "数据结构",
      difficulty: "medium"
    },
    {
      id: 69,
      english: "graph",
      chinese: "图",
      explanation: "节点和边组成的数据结构",
      example: "Social networks can be modeled as graphs.",
      category: "数据结构",
      difficulty: "hard"
    },
    {
      id: 70,
      english: "dynamic programming",
      chinese: "动态规划",
      explanation: "解决复杂问题的算法技术",
      example: "Use dynamic programming for optimization.",
      category: "数据结构",
      difficulty: "hard"
    },
  
    // === 版本控制 (10个) ===
    {
      id: 71,
      english: "Git",
      chinese: "Git版本控制",
      explanation: "分布式版本控制系统",
      example: "Use Git to track code changes.",
      category: "版本控制",
      difficulty: "easy"
    },
    {
      id: 72,
      english: "commit",
      chinese: "提交",
      explanation: "保存代码更改的操作",
      example: "Commit your changes with a clear message.",
      category: "版本控制",
      difficulty: "easy"
    },
    {
      id: 73,
      english: "branch",
      chinese: "分支",
      explanation: "代码的并行开发线",
      example: "Create a new branch for the feature.",
      category: "版本控制",
      difficulty: "easy"
    },
    {
      id: 74,
      english: "merge",
      chinese: "合并",
      explanation: "将不同分支的代码合并",
      example: "Merge the feature branch into main.",
      category: "版本控制",
      difficulty: "medium"
    },
    {
      id: 75,
      english: "repository",
      chinese: "仓库",
      explanation: "存储项目代码的地方",
      example: "Clone the repository to your local machine.",
      category: "版本控制",
      difficulty: "easy"
    },
    {
      id: 76,
      english: "clone",
      chinese: "克隆",
      explanation: "复制远程仓库到本地",
      example: "Clone the GitHub repository.",
      category: "版本控制",
      difficulty: "easy"
    },
    {
      id: 77,
      english: "push",
      chinese: "推送",
      explanation: "将本地更改上传到远程仓库",
      example: "Push your commits to the remote repository.",
      category: "版本控制",
      difficulty: "easy"
    },
    {
      id: 78,
      english: "pull",
      chinese: "拉取",
      explanation: "从远程仓库获取最新更改",
      example: "Pull the latest changes before starting work.",
      category: "版本控制",
      difficulty: "easy"
    },
    {
      id: 79,
      english: "conflict",
      chinese: "冲突",
      explanation: "不同更改之间的矛盾",
      example: "Resolve merge conflicts manually.",
      category: "版本控制",
      difficulty: "medium"
    },
    {
      id: 80,
      english: "GitHub",
      chinese: "GitHub平台",
      explanation: "基于Git的代码托管平台",
      example: "Host your project on GitHub.",
      category: "版本控制",
      difficulty: "easy"
    },
  
    // === API与网络 (15个) ===
    {
      id: 81,
      english: "API",
      chinese: "应用程序接口",
      explanation: "不同软件组件之间的接口",
      example: "Use the weather API to get forecast data.",
      category: "API",
      difficulty: "easy"
    },
    {
      id: 82,
      english: "REST",
      chinese: "REST架构",
      explanation: "网络应用设计的架构风格",
      example: "Design a RESTful API for the application.",
      category: "API",
      difficulty: "medium"
    },
    {
      id: 83,
      english: "endpoint",
      chinese: "端点",
      explanation: "API的访问地址",
      example: "The login endpoint is /api/auth/login.",
      category: "API",
      difficulty: "easy"
    },
    {
      id: 84,
      english: "HTTP",
      chinese: "超文本传输协议",
      explanation: "Web通信的基础协议",
      example: "HTTP requests transfer data over the web.",
      category: "API",
      difficulty: "easy"
    },
    {
      id: 85,
      english: "GET",
      chinese: "GET请求",
      explanation: "获取数据的HTTP方法",
      example: "Use GET request to fetch user information.",
      category: "API",
      difficulty: "easy"
    },
    {
      id: 86,
      english: "POST",
      chinese: "POST请求",
      explanation: "发送数据的HTTP方法",
      example: "POST request to create a new user account.",
      category: "API",
      difficulty: "easy"
    },
    {
      id: 87,
      english: "JSON",
      chinese: "JSON格式",
      explanation: "轻量级数据交换格式",
      example: "API returns data in JSON format.",
      category: "API",
      difficulty: "easy"
    },
    {
      id: 88,
      english: "fetch",
      chinese: "获取",
      explanation: "JavaScript中进行网络请求的函数",
      example: "Use fetch to call the API endpoint.",
      category: "API",
      difficulty: "medium"
    },
    {
      id: 89,
      english: "async",
      chinese: "异步",
      explanation: "不阻塞程序执行的操作",
      example: "Use async/await for API calls.",
      category: "API",
      difficulty: "medium"
    },
    {
      id: 90,
      english: "await",
      chinese: "等待",
      explanation: "等待异步操作完成的关键字",
      example: "Await the API response before proceeding.",
      category: "API",
      difficulty: "medium"
    },
    {
      id: 91,
      english: "promise",
      chinese: "承诺",
      explanation: "JavaScript中处理异步操作的对象",
      example: "The API call returns a Promise.",
      category: "API",
      difficulty: "medium"
    },
    {
      id: 92,
      english: "callback",
      chinese: "回调函数",
      explanation: "作为参数传递的函数",
      example: "Pass a callback function to handle the result.",
      category: "API",
      difficulty: "medium"
    },
    {
      id: 93,
      english: "CORS",
      chinese: "跨域资源共享",
      explanation: "允许跨域请求的机制",
      example: "Configure CORS to allow API access.",
      category: "API",
      difficulty: "hard"
    },
    {
      id: 94,
      english: "authentication",
      chinese: "身份验证",
      explanation: "验证用户身份的过程",
      example: "Add authentication to protect the API.",
      category: "API",
      difficulty: "medium"
    },
    {
      id: 95,
      english: "token",
      chinese: "令牌",
      explanation: "身份验证的凭证",
      example: "Include the access token in API requests.",
      category: "API",
      difficulty: "medium"
    },
  
    // === 数据库 (10个) ===
    {
      id: 96,
      english: "database",
      chinese: "数据库",
      explanation: "组织存储数据的系统",
      example: "Store user data in the database.",
      category: "数据库",
      difficulty: "easy"
    },
    {
      id: 97,
      english: "SQL",
      chinese: "结构化查询语言",
      explanation: "管理关系数据库的语言",
      example: "Write SQL queries to retrieve data.",
      category: "数据库",
      difficulty: "medium"
    },
    {
      id: 98,
      english: "table",
      chinese: "表",
      explanation: "数据库中存储数据的结构",
      example: "Create a users table in the database.",
      category: "数据库",
      difficulty: "easy"
    },
    {
      id: 99,
      english: "record",
      chinese: "记录",
      explanation: "数据库表中的一行数据",
      example: "Insert a new record into the table.",
      category: "数据库",
      difficulty: "easy"
    },
    {
      id: 100,
      english: "query",
      chinese: "查询",
      explanation: "从数据库检索数据的请求",
      example: "Execute a query to find all users.",
      category: "数据库",
      difficulty: "easy"
    },
    {
      id: 101,
      english: "schema",
      chinese: "模式",
      explanation: "数据库结构的定义",
      example: "Design the database schema carefully.",
      category: "数据库",
      difficulty: "medium"
    },
    {
      id: 102,
      english: "primary key",
      chinese: "主键",
      explanation: "唯一标识记录的字段",
      example: "Use ID as the primary key for the table.",
      category: "数据库",
      difficulty: "medium"
    },
    {
      id: 103,
      english: "foreign key",
      chinese: "外键",
      explanation: "连接不同表的字段",
      example: "Foreign key maintains referential integrity.",
      category: "数据库",
      difficulty: "medium"
    },
    {
      id: 104,
      english: "index",
      chinese: "索引",
      explanation: "提高查询速度的数据库结构",
      example: "Create an index on the email column.",
      category: "数据库",
      difficulty: "medium"
    },
    {
      id: 105,
      english: "migration",
      chinese: "迁移",
      explanation: "数据库结构变更的管理",
      example: "Run database migrations to update schema.",
      category: "数据库",
      difficulty: "hard"
    },
  
    // === 测试与质量 (10个) ===
    {
      id: 106,
      english: "test",
      chinese: "测试",
      explanation: "验证代码功能正确性",
      example: "Write tests for all critical functions.",
      category: "测试",
      difficulty: "easy"
    },
    {
      id: 107,
      english: "unit test",
      chinese: "单元测试",
      explanation: "测试单个函数或组件",
      example: "Unit tests verify individual components.",
      category: "测试",
      difficulty: "medium"
    },
    {
      id: 108,
      english: "integration test",
      chinese: "集成测试",
      explanation: "测试组件间的协作",
      example: "Integration tests check component interaction.",
      category: "测试",
      difficulty: "medium"
    },
    {
      id: 109,
      english: "mock",
      chinese: "模拟",
      explanation: "测试中替代真实依赖的对象",
      example: "Mock the API call in unit tests.",
      category: "测试",
      difficulty: "medium"
    },
    {
      id: 110,
      english: "assertion",
      chinese: "断言",
      explanation: "测试中验证结果的语句",
      example: "Add assertions to verify the output.",
      category: "测试",
      difficulty: "medium"
    },
    {
      id: 111,
      english: "coverage",
      chinese: "覆盖率",
      explanation: "测试覆盖代码的比例",
      example: "Aim for high test coverage in your project.",
      category: "测试",
      difficulty: "medium"
    },
    {
      id: 112,
      english: "bug",
      chinese: "漏洞/错误",
      explanation: "程序中的错误或缺陷",
      example: "Fix the bug in the login function.",
      category: "测试",
      difficulty: "easy"
    },
    {
      id: 113,
      english: "regression",
      chinese: "回归",
      explanation: "新更改导致的旧功能失效",
      example: "Regression tests prevent breaking existing features.",
      category: "测试",
      difficulty: "hard"
    },
    {
      id: 114,
      english: "validation",
      chinese: "验证",
      explanation: "检查输入数据的正确性",
      example: "Add input validation for the form.",
      category: "测试",
      difficulty: "easy"
    },
    {
      id: 115,
      english: "error handling",
      chinese: "错误处理",
      explanation: "处理程序执行中错误的机制",
      example: "Implement proper error handling in the API.",
      category: "测试",
      difficulty: "medium"
    },
  
    // === 部署与运维 (10个) ===
    {
      id: 116,
      english: "deployment",
      chinese: "部署",
      explanation: "将应用发布到生产环境",
      example: "Automate the deployment process.",
      category: "部署",
      difficulty: "medium"
    },
    {
      id: 117,
      english: "server",
      chinese: "服务器",
      explanation: "提供服务的计算机系统",
      example: "Deploy the application to a web server.",
      category: "部署",
      difficulty: "easy"
    },
    {
      id: 118,
      english: "hosting",
      chinese: "托管",
      explanation: "提供服务器服务的服务",
      example: "Choose a reliable hosting provider.",
      category: "部署",
      difficulty: "easy"
    },
    {
      id: 119,
      english: "domain",
      chinese: "域名",
      explanation: "网站的网络地址",
      example: "Register a domain name for your website.",
      category: "部署",
      difficulty: "easy"
    },
    {
      id: 120,
      english: "SSL",
      chinese: "安全套接字层",
      explanation: "网络通信加密协议",
      example: "Enable SSL certificate for HTTPS.",
      category: "部署",
      difficulty: "medium"
    },
    {
      id: 121,
      english: "CDN",
      chinese: "内容分发网络",
      explanation: "加速内容传输的网络",
      example: "Use CDN to improve website performance.",
      category: "部署",
      difficulty: "medium"
    },
    {
      id: 122,
      english: "cache",
      chinese: "缓存",
      explanation: "临时存储数据提高性能",
      example: "Implement caching to reduce load times.",
      category: "部署",
      difficulty: "medium"
    },
    {
      id: 123,
      english: "load balancer",
      chinese: "负载均衡器",
      explanation: "分发网络流量的设备",
      example: "Use load balancer for high availability.",
      category: "部署",
      difficulty: "hard"
    },
    {
      id: 124,
      english: "monitoring",
      chinese: "监控",
      explanation: "跟踪系统性能和状态",
      example: "Set up monitoring for the production app.",
      category: "部署",
      difficulty: "medium"
    },
    {
      id: 125,
      english: "backup",
      chinese: "备份",
      explanation: "数据的副本保护",
      example: "Create regular backups of the database.",
      category: "部署",
      difficulty: "easy"
    },
  
    // === 工具与流程 (15个) ===
    {
      id: 126,
      english: "npm",
      chinese: "Node包管理器",
      explanation: "JavaScript包管理工具",
      example: "Install dependencies using npm.",
      category: "工具",
      difficulty: "easy"
    },
    {
      id: 127,
      english: "package",
      chinese: "包",
      explanation: "可重用的代码模块",
      example: "Install the React package from npm.",
      category: "工具",
      difficulty: "easy"
    },
    {
      id: 128,
      english: "dependency",
      chinese: "依赖",
      explanation: "项目需要的外部代码库",
      example: "Manage project dependencies carefully.",
      category: "工具",
      difficulty: "easy"
    },
    {
      id: 129,
      english: "bundle",
      chinese: "打包",
      explanation: "将多个文件合并的过程",
      example: "Bundle JavaScript files for production.",
      category: "工具",
      difficulty: "medium"
    },
    {
      id: 130,
      english: "webpack",
      chinese: "Webpack打包工具",
      explanation: "模块打包工具",
      example: "Configure webpack for the build process.",
      category: "工具",
      difficulty: "hard"
    },
    {
      id: 131,
      english: "build",
      chinese: "构建",
      explanation: "编译和准备代码的过程",
      example: "Run the build command before deployment.",
      category: "工具",
      difficulty: "easy"
    },
    {
      id: 132,
      english: "linter",
      chinese: "代码检查器",
      explanation: "检查代码质量的工具",
      example: "Use ESLint to maintain code quality.",
      category: "工具",
      difficulty: "medium"
    },
    {
      id: 133,
      english: "formatter",
      chinese: "格式化器",
      explanation: "统一代码格式的工具",
      example: "Prettier automatically formats your code.",
      category: "工具",
      difficulty: "easy"
    },
    {
      id: 134,
      english: "IDE",
      chinese: "集成开发环境",
      explanation: "编写代码的软件工具",
      example: "VS Code is a popular IDE for web development.",
      category: "工具",
      difficulty: "easy"
    },
    {
      id: 135,
      english: "terminal",
      chinese: "终端",
      explanation: "命令行界面",
      example: "Use terminal to run npm commands.",
      category: "工具",
      difficulty: "easy"
    },
    {
      id: 136,
      english: "CLI",
      chinese: "命令行界面",
      explanation: "通过文本命令操作的界面",
      example: "Use CLI tools to automate tasks.",
      category: "工具",
      difficulty: "medium"
    },
    {
      id: 137,
      english: "agile",
      chinese: "敏捷开发",
      explanation: "迭代式软件开发方法",
      example: "Follow agile methodology for the project.",
      category: "工具",
      difficulty: "medium"
    },
    {
      id: 138,
      english: "sprint",
      chinese: "冲刺",
      explanation: "敏捷开发中的短期开发周期",
      example: "Plan features for the next sprint.",
      category: "工具",
      difficulty: "medium"
    },
    {
      id: 139,
      english: "refactor",
      chinese: "重构",
      explanation: "改进代码结构而不改变功能",
      example: "Refactor the code to improve readability.",
      category: "工具",
      difficulty: "medium"
    },
    {
      id: 140,
      english: "documentation",
      chinese: "文档",
      explanation: "解释代码和项目的文字材料",
      example: "Write clear documentation for the API.",
      category: "工具",
      difficulty: "easy"
    },
  
    // === 安全与性能 (10个) ===
    {
      id: 141,
      english: "security",
      chinese: "安全",
      explanation: "保护系统免受威胁",
      example: "Implement security best practices.",
      category: "安全",
      difficulty: "medium"
    },
    {
      id: 142,
      english: "encryption",
      chinese: "加密",
      explanation: "保护数据的编码技术",
      example: "Use encryption to protect sensitive data.",
      category: "安全",
      difficulty: "medium"
    },
    {
      id: 143,
      english: "vulnerability",
      chinese: "漏洞",
      explanation: "系统中的安全弱点",
      example: "Fix security vulnerabilities promptly.",
      category: "安全",
      difficulty: "medium"
    },
    {
      id: 144,
      english: "performance",
      chinese: "性能",
      explanation: "系统运行的效率",
      example: "Optimize performance for better user experience.",
      category: "安全",
      difficulty: "easy"
    },
    {
      id: 145,
      english: "scalability",
      chinese: "可扩展性",
      explanation: "系统处理增长的能力",
      example: "Design for scalability from the beginning.",
      category: "安全",
      difficulty: "hard"
    },
    {
      id: 146,
      english: "bottleneck",
      chinese: "瓶颈",
      explanation: "限制系统性能的因素",
      example: "Identify and fix performance bottlenecks.",
      category: "安全",
      difficulty: "medium"
    },
    {
      id: 147,
      english: "latency",
      chinese: "延迟",
      explanation: "响应请求所需的时间",
      example: "Reduce latency to improve user experience.",
      category: "安全",
      difficulty: "medium"
    },
    {
      id: 148,
      english: "throughput",
      chinese: "吞吐量",
      explanation: "系统处理请求的速率",
      example: "Increase throughput by optimizing algorithms.",
      category: "安全",
      difficulty: "medium"
    },
    {
      id: 149,
      english: "session",
      chinese: "会话",
      explanation: "用户与系统的交互期间",
      example: "Manage user sessions securely.",
      category: "安全",
      difficulty: "easy"
    },
    {
      id: 150,
      english: "cookie",
      chinese: "Cookie",
      explanation: "存储在浏览器中的小数据文件",
      example: "Use cookies to remember user preferences.",
      category: "安全",
      difficulty: "easy"
    }
  ]
  
  // 导出词汇统计信息
  export const wordStats = {
    total: words.length,
    categories: {
      "基础概念": words.filter(w => w.category === "基础概念").length,
      "Web开发": words.filter(w => w.category === "Web开发").length,
      "React": words.filter(w => w.category === "React").length,
      "数据结构": words.filter(w => w.category === "数据结构").length,
      "版本控制": words.filter(w => w.category === "版本控制").length,
      "API": words.filter(w => w.category === "API").length,
      "数据库": words.filter(w => w.category === "数据库").length,
      "测试": words.filter(w => w.category === "测试").length,
      "部署": words.filter(w => w.category === "部署").length,
      "工具": words.filter(w => w.category === "工具").length,
      "安全": words.filter(w => w.category === "安全").length,
    },
    difficulties: {
      easy: words.filter(w => w.difficulty === "easy").length,
      medium: words.filter(w => w.difficulty === "medium").length,
      hard: words.filter(w => w.difficulty === "hard").length,
    }
  }