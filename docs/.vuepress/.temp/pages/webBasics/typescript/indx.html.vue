<template><div><h1 id="typescript基础" tabindex="-1"><a class="header-anchor" href="#typescript基础" aria-hidden="true">#</a> TypeScript基础</h1>
<h2 id="_1-基本数据类型和any类型" tabindex="-1"><a class="header-anchor" href="#_1-基本数据类型和any类型" aria-hidden="true">#</a> 1.基本数据类型和any类型</h2>
<blockquote>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%B1%BB%E5%9E%8B<ExternalLinkIcon/></a></p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// JavaScript中的7种基本数据类型（原始数据类型）和Object</span>
<span class="token number">1</span><span class="token punctuation">.</span>String
<span class="token number">2</span><span class="token punctuation">.</span>Number
<span class="token number">3</span><span class="token punctuation">.</span>Boolean
<span class="token number">4</span><span class="token punctuation">.</span>Undefined
<span class="token number">5</span><span class="token punctuation">.</span>Null
<span class="token number">6</span><span class="token punctuation">.</span>Symbol  <span class="token comment">//es6新增</span>
<span class="token number">7</span><span class="token punctuation">.</span>BigInt  <span class="token comment">//es6新增</span>

<span class="token keyword">let</span> bool<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
bool <span class="token operator">=</span> <span class="token string">'helloWorld'</span> <span class="token comment">//不能将类型“string”分配给类型“boolean”</span>

<span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">30</span>

<span class="token keyword">let</span> names<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'张三'</span>
<span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>names<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">let</span> und<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> nul<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token comment">// undefined与null时所有类型的子类型，可以作为初始默认值使用，严格模式下不建议使用</span>

und <span class="token operator">=</span> <span class="token keyword">null</span>  <span class="token comment">//不能将类型“null”分配给类型“undefined”</span>
nul <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">//不能将类型“undefined”分配给类型“null”</span>

<span class="token comment">//strictNullChecks就表示是否只允许null和undefined赋值给void类型和它们各自的类型</span>

<span class="token comment">//ts官方建议这个配置默认为true，可以避免问题查找过于混乱。 //强制关闭，见1.1</span>

<span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token comment">//any不建议使用，失去类型约束意义</span>
<span class="token keyword">let</span> strs<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">'123'</span>

strs <span class="token operator">=</span> <span class="token number">1231</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_1-1-tsconfig-json" aria-hidden="true">#</a> 1.1.tsconfig.json</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-数组和元组" tabindex="-1"><a class="header-anchor" href="#_2-数组和元组" aria-hidden="true">#</a> 2.数组和元组</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token comment">// let arr: number[] = [1, 2, 3, '4']  //不能将类型“string”分配给类型“number”</span>

arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">//快捷提示类型属性方法</span>

<span class="token comment">//类数组</span>
<span class="token comment">//类数组:其实它就是一个对象，一个长的像数组的对象。</span>

<span class="token comment">// 那类数组和数组区别：</span>
<span class="token comment">// 1.都有length属性</span>
<span class="token comment">// 2.类数组也可以for循环遍历，有的类数组还可以通过 for of 遍历</span>
<span class="token comment">// 3.类数组不具备数组的原型方法，因此类数组不可调用相关数组方法（如，push,slicec,concat等等）</span>

<span class="token keyword">function</span> <span class="token function">args</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//[Arguments] {}</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object</span>
    arguments<span class="token punctuation">.</span>length
    arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    arguments<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//类型“IArguments”上不存在属性“push”  //ts内置了类型</span>
<span class="token punctuation">}</span>

<span class="token comment">//元组</span>

<span class="token keyword">let</span> users<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'张三'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> users<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'张三'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span>  <span class="token comment">//越界报错</span>
<span class="token comment">//不能将类型“[string, number, boolean]”分配给类型“[string, number]”。</span>
<span class="token comment">//源具有 3 个元素，但目标仅允许 2 个</span>

<span class="token comment">//可以使用push方法突破限制，但是数据类型必须时数组约定的类型</span>
users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'李四'</span><span class="token punctuation">)</span>
users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//类型“boolean”的参数不能赋给类型“string | number”的参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ![image.png](https://cdn.nlark.com/yuque/0/2024/png/22383356/1706342117104-4ca21143-b5eb-4403-8fc1-e3e47d90a3b1.png#averageHue=%23668643&clientId=u66c66441-197e-4&from=paste&height=346&id=u62c46cec&originHeight=346&originWidth=746&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29837&status=done&style=none&taskId=ub3807f24-011a-468f-a0cf-c7bd81a098e&title=&width=746) -->
<h2 id="_3-interface-接口" tabindex="-1"><a class="header-anchor" href="#_3-interface-接口" aria-hidden="true">#</a> 3.Interface（接口）</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//一个对象特征的描述</span>
<span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'zhangsan'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    id<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-函数定义" tabindex="-1"><a class="header-anchor" href="#_4-函数定义" aria-hidden="true">#</a> 4.函数定义</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> z <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">ISum</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> add2<span class="token operator">:</span> ISum <span class="token operator">=</span> add

<span class="token keyword">let</span> <span class="token function-variable function">add3</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span> <span class="token operator">=</span> add
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-类型推断-联合类型-类型断言" tabindex="-1"><a class="header-anchor" href="#_5-类型推断-联合类型-类型断言" aria-hidden="true">#</a> 5.类型推断&amp;联合类型&amp;类型断言</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//类型推断：没有显著声明类型，会根据赋值和返回值推断类型</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'hello world'</span>  <span class="token comment">//let str: string</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">100</span>  <span class="token comment">//let num: number</span>


<span class="token comment">//联合类型：当不确定类型时可以定义多个类型 |</span>

<span class="token keyword">let</span> strOrNum<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>

<span class="token comment">// strOrNum = '123'  strOrNum.length  strOrNum.toString() //可以调用联合类型共有的方法</span>

strOrNum <span class="token operator">=</span> <span class="token number">100</span>
<span class="token comment">// strOrNum.length //类型“number”上不存在属性“length”</span>
<span class="token comment">// strOrNum.toString()</span>


<span class="token comment">//类型推断：不确定类型时，可以显著告诉编译器当成何种类型去处理 as</span>
<span class="token comment">/*断言类型，如果在联合类型中不存，断言将会报错 */</span>


<span class="token keyword">const</span> <span class="token function-variable function">getLength</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> str <span class="token operator">=</span> val <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> str<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> num <span class="token operator">=</span> val <span class="token keyword">as</span> <span class="token builtin">number</span>
        <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">//类型守护  type guard</span>
<span class="token keyword">const</span> <span class="token function-variable function">getLength2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> val<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-enum-枚举" tabindex="-1"><a class="header-anchor" href="#_6-enum-枚举" aria-hidden="true">#</a> 6.Enum（枚举）</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//枚举的双向绑定性</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    right
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span>  <span class="token comment">//0</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">//up</span>

<span class="token comment">//编译结果</span>
<span class="token comment">// var Direction;</span>
<span class="token comment">// (function (Direction) {</span>
<span class="token comment">//     Direction[Direction["Up"] = 0] = "Up";</span>
<span class="token comment">//     Direction[Direction["Down"] = 1] = "Down";</span>
<span class="token comment">//     Direction[Direction["Left"] = 2] = "Left";</span>
<span class="token comment">//     Direction[Direction["right"] = 3] = "right";</span>
<span class="token comment">// })(Direction || (Direction = {}));</span>

<span class="token comment">//基于初始值的自动累加</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    right
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span>  <span class="token comment">//10</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Down<span class="token punctuation">)</span>  <span class="token comment">//11</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">//Up</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">//Down</span>

<span class="token comment">//编译结果</span>
<span class="token comment">// var Direction;</span>
<span class="token comment">// (function (Direction) {</span>
<span class="token comment">//     Direction[Direction["Up"] = 10] = "Up";</span>
<span class="token comment">//     Direction[Direction["Down"] = 11] = "Down";</span>
<span class="token comment">//     Direction[Direction["Left"] = 12] = "Left";</span>
<span class="token comment">//     Direction[Direction["right"] = 13] = "right";</span>
<span class="token comment">// })(Direction || (Direction = {}));</span>


<span class="token comment">//自定义枚举值</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token string">"UP"</span><span class="token punctuation">,</span>
    Down <span class="token operator">=</span> <span class="token string">"DOWM"</span><span class="token punctuation">,</span>
    Left <span class="token operator">=</span> <span class="token string">"LEFT"</span><span class="token punctuation">,</span>
    right <span class="token operator">=</span> <span class="token string">"RIGHT"</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span>  <span class="token comment">//UP</span>

<span class="token comment">//编译结果</span>
<span class="token comment">// var Direction;</span>
<span class="token comment">// (function (Direction) {</span>
<span class="token comment">//     Direction["Up"] = "UP";</span>
<span class="token comment">//     Direction["Down"] = "DOWM";</span>
<span class="token comment">//     Direction["Left"] = "LEFT";</span>
<span class="token comment">//     Direction["right"] = "RIGHT";</span>
<span class="token comment">// })(Direction || (Direction = {}));</span>


<span class="token comment">//枚举的常用用法</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token string">"UP"</span><span class="token punctuation">,</span>
    Down <span class="token operator">=</span> <span class="token string">"DOWM"</span><span class="token punctuation">,</span>
    Left <span class="token operator">=</span> <span class="token string">"LEFT"</span><span class="token punctuation">,</span>
    right <span class="token operator">=</span> <span class="token string">"RIGHT"</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> dir <span class="token operator">=</span> <span class="token string">'UP'</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">===</span> Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'go up!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//编译结果</span>
<span class="token comment">// var Direction;</span>
<span class="token comment">// (function (Direction) {</span>
<span class="token comment">//     Direction["Up"] = "UP";</span>
<span class="token comment">//     Direction["Down"] = "DOWM";</span>
<span class="token comment">//     Direction["Left"] = "LEFT";</span>
<span class="token comment">//     Direction["right"] = "RIGHT";</span>
<span class="token comment">// })(Direction || (Direction = {}));</span>


<span class="token comment">//常量枚举，提高性能，编译会去掉其他无用枚举值</span>

<span class="token keyword">const</span> <span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token string">"UP"</span><span class="token punctuation">,</span>
    Down <span class="token operator">=</span> <span class="token string">"DOWM"</span><span class="token punctuation">,</span>
    Left <span class="token operator">=</span> <span class="token string">"LEFT"</span><span class="token punctuation">,</span>
    right <span class="token operator">=</span> <span class="token string">"RIGHT"</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> dir <span class="token operator">=</span> <span class="token string">'UP'</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">===</span> Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'go up!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//编译结果</span>
<span class="token comment">// var dir = 'UP';</span>
<span class="token comment">// if (dir === "UP" /* Direction.Up */) {</span>
<span class="token comment">//     console.log('go up!');</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-generics-泛型" tabindex="-1"><a class="header-anchor" href="#_7-generics-泛型" aria-hidden="true">#</a> 7.Generics（泛型）</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//不知道函数具体返回值类型时没法约束得到的值的类型</span>
<span class="token keyword">const</span> <span class="token function-variable function">getValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span>  <span class="token comment">//const strs: any</span>

<span class="token comment">//当函数传入的参数类型不固定时, 固定类型不灵活</span>

<span class="token keyword">const</span> getValue <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span>  <span class="token comment">//const strs: string </span>

<span class="token comment">//此时用泛型，泛型会根据具体的返回值进行类型推断，以此得到一个期望的返回值类型</span>
<span class="token comment">//需要占位表示 T,U....可以是任意字符的占位符</span>
<span class="token comment">//函数用function 定义</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getValue</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span>  <span class="token comment">//const strs: "123" //没有传入具体类型约束的值，传入什么返回的就是什么</span>
<span class="token keyword">const</span> strs<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span> <span class="token comment">//const strs: string  进行string类型</span>
<span class="token keyword">const</span> strVal<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'123'</span>    <span class="token comment">//进行string类型约束</span>
<span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span>strVal<span class="token punctuation">)</span>   <span class="token comment">//const strs: string  //返回string类型</span>

<span class="token comment">//多个泛型类型定义</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getValue</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//let result: [number, string]</span>
result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length  <span class="token comment">//报错 类型“number”上不存在属性“length”</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>  <span class="token comment">//5  string类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


