import{_ as e,r as t,o as p,c as o,a as n,b as s,e as c,d as l}from"./app-mPaZ1tzL.js";const i={},u=n("h2",{id:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),r=n("h2",{id:"_1-基本数据类型和any类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-基本数据类型和any类型","aria-hidden":"true"},"#"),s(" 1.基本数据类型和any类型")],-1),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},d=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// JavaScript中的7种基本数据类型（原始数据类型）和Object</span>
<span class="token number">1</span><span class="token punctuation">.</span>String
<span class="token number">2</span><span class="token punctuation">.</span>Number
<span class="token number">3</span><span class="token punctuation">.</span>Boolean
<span class="token number">4</span><span class="token punctuation">.</span>Undefined
<span class="token number">5</span><span class="token punctuation">.</span>Null
<span class="token number">6</span><span class="token punctuation">.</span>Symbol  <span class="token comment">//es6新增</span>
<span class="token number">7</span><span class="token punctuation">.</span>BigInt  <span class="token comment">//es6新增</span>

<span class="token keyword">let</span> bool<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
bool <span class="token operator">=</span> <span class="token string">&#39;helloWorld&#39;</span> <span class="token comment">//不能将类型“string”分配给类型“boolean”</span>

<span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">30</span>

<span class="token keyword">let</span> names<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
<span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>names<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">let</span> und<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> nul<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token comment">// undefined与null时所有类型的子类型，可以作为初始默认值使用，严格模式下不建议使用</span>

und <span class="token operator">=</span> <span class="token keyword">null</span>  <span class="token comment">//不能将类型“null”分配给类型“undefined”</span>
nul <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">//不能将类型“undefined”分配给类型“null”</span>

<span class="token comment">//strictNullChecks就表示是否只允许null和undefined赋值给void类型和它们各自的类型</span>

<span class="token comment">//ts官方建议这个配置默认为true，可以避免问题查找过于混乱。 //强制关闭，见1.1</span>

<span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token comment">//any不建议使用，失去类型约束意义</span>
<span class="token keyword">let</span> strs<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>

strs <span class="token operator">=</span> <span class="token number">1231</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_1-1-tsconfig-json" aria-hidden="true">#</a> 1.1.tsconfig.json</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-数组和元组" tabindex="-1"><a class="header-anchor" href="#_2-数组和元组" aria-hidden="true">#</a> 2.数组和元组</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token comment">// let arr: number[] = [1, 2, 3, &#39;4&#39;]  //不能将类型“string”分配给类型“number”</span>

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

<span class="token keyword">let</span> users<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> users<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span>  <span class="token comment">//越界报错</span>
<span class="token comment">//不能将类型“[string, number, boolean]”分配给类型“[string, number]”。</span>
<span class="token comment">//源具有 3 个元素，但目标仅允许 2 个</span>

<span class="token comment">//可以使用push方法突破限制，但是数据类型必须时数组约定的类型</span>
users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span>
users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//类型“boolean”的参数不能赋给类型“string | number”的参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-interface-接口" tabindex="-1"><a class="header-anchor" href="#_3-interface-接口" aria-hidden="true">#</a> 3.Interface（接口）</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//一个对象特征的描述</span>
<span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    id<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-函数定义" tabindex="-1"><a class="header-anchor" href="#_4-函数定义" aria-hidden="true">#</a> 4.函数定义</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> z <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">ISum</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> add2<span class="token operator">:</span> ISum <span class="token operator">=</span> add

<span class="token keyword">let</span> <span class="token function-variable function">add3</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">=</span> add
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-类型推断-联合类型-类型断言" tabindex="-1"><a class="header-anchor" href="#_5-类型推断-联合类型-类型断言" aria-hidden="true">#</a> 5.类型推断&amp;联合类型&amp;类型断言</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//类型推断：没有显著声明类型，会根据赋值和返回值推断类型</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>  <span class="token comment">//let str: string</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">100</span>  <span class="token comment">//let num: number</span>


<span class="token comment">//联合类型：当不确定类型时可以定义多个类型 |</span>

<span class="token keyword">let</span> strOrNum<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>

<span class="token comment">// strOrNum = &#39;123&#39;  strOrNum.length  strOrNum.toString() //可以调用联合类型共有的方法</span>

strOrNum <span class="token operator">=</span> <span class="token number">100</span>
<span class="token comment">// strOrNum.length //类型“number”上不存在属性“length”</span>
<span class="token comment">// strOrNum.toString()</span>


<span class="token comment">//类型推断：不确定类型时，可以显著告诉编译器当成何种类型去处理 as</span>
<span class="token comment">/*断言类型，如果在联合类型中不存，断言将会报错 */</span>


<span class="token keyword">const</span> <span class="token function-variable function">getLength</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> str <span class="token operator">=</span> val <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> str<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> num <span class="token operator">=</span> val <span class="token keyword">as</span> <span class="token builtin">number</span>
        <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">//类型守护  type guard</span>
<span class="token keyword">const</span> <span class="token function-variable function">getLength2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> val<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-enum-枚举" tabindex="-1"><a class="header-anchor" href="#_6-enum-枚举" aria-hidden="true">#</a> 6.Enum（枚举）</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//枚举的双向绑定性</span>

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
<span class="token comment">//     Direction[Direction[&quot;Up&quot;] = 0] = &quot;Up&quot;;</span>
<span class="token comment">//     Direction[Direction[&quot;Down&quot;] = 1] = &quot;Down&quot;;</span>
<span class="token comment">//     Direction[Direction[&quot;Left&quot;] = 2] = &quot;Left&quot;;</span>
<span class="token comment">//     Direction[Direction[&quot;right&quot;] = 3] = &quot;right&quot;;</span>
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
<span class="token comment">//     Direction[Direction[&quot;Up&quot;] = 10] = &quot;Up&quot;;</span>
<span class="token comment">//     Direction[Direction[&quot;Down&quot;] = 11] = &quot;Down&quot;;</span>
<span class="token comment">//     Direction[Direction[&quot;Left&quot;] = 12] = &quot;Left&quot;;</span>
<span class="token comment">//     Direction[Direction[&quot;right&quot;] = 13] = &quot;right&quot;;</span>
<span class="token comment">// })(Direction || (Direction = {}));</span>


<span class="token comment">//自定义枚举值</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token string">&quot;UP&quot;</span><span class="token punctuation">,</span>
    Down <span class="token operator">=</span> <span class="token string">&quot;DOWM&quot;</span><span class="token punctuation">,</span>
    Left <span class="token operator">=</span> <span class="token string">&quot;LEFT&quot;</span><span class="token punctuation">,</span>
    right <span class="token operator">=</span> <span class="token string">&quot;RIGHT&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span>  <span class="token comment">//UP</span>

<span class="token comment">//编译结果</span>
<span class="token comment">// var Direction;</span>
<span class="token comment">// (function (Direction) {</span>
<span class="token comment">//     Direction[&quot;Up&quot;] = &quot;UP&quot;;</span>
<span class="token comment">//     Direction[&quot;Down&quot;] = &quot;DOWM&quot;;</span>
<span class="token comment">//     Direction[&quot;Left&quot;] = &quot;LEFT&quot;;</span>
<span class="token comment">//     Direction[&quot;right&quot;] = &quot;RIGHT&quot;;</span>
<span class="token comment">// })(Direction || (Direction = {}));</span>


<span class="token comment">//枚举的常用用法</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token string">&quot;UP&quot;</span><span class="token punctuation">,</span>
    Down <span class="token operator">=</span> <span class="token string">&quot;DOWM&quot;</span><span class="token punctuation">,</span>
    Left <span class="token operator">=</span> <span class="token string">&quot;LEFT&quot;</span><span class="token punctuation">,</span>
    right <span class="token operator">=</span> <span class="token string">&quot;RIGHT&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> dir <span class="token operator">=</span> <span class="token string">&#39;UP&#39;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">===</span> Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;go up!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//编译结果</span>
<span class="token comment">// var Direction;</span>
<span class="token comment">// (function (Direction) {</span>
<span class="token comment">//     Direction[&quot;Up&quot;] = &quot;UP&quot;;</span>
<span class="token comment">//     Direction[&quot;Down&quot;] = &quot;DOWM&quot;;</span>
<span class="token comment">//     Direction[&quot;Left&quot;] = &quot;LEFT&quot;;</span>
<span class="token comment">//     Direction[&quot;right&quot;] = &quot;RIGHT&quot;;</span>
<span class="token comment">// })(Direction || (Direction = {}));</span>


<span class="token comment">//常量枚举，提高性能，编译会去掉其他无用枚举值</span>

<span class="token keyword">const</span> <span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token string">&quot;UP&quot;</span><span class="token punctuation">,</span>
    Down <span class="token operator">=</span> <span class="token string">&quot;DOWM&quot;</span><span class="token punctuation">,</span>
    Left <span class="token operator">=</span> <span class="token string">&quot;LEFT&quot;</span><span class="token punctuation">,</span>
    right <span class="token operator">=</span> <span class="token string">&quot;RIGHT&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> dir <span class="token operator">=</span> <span class="token string">&#39;UP&#39;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">===</span> Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;go up!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//编译结果</span>
<span class="token comment">// var dir = &#39;UP&#39;;</span>
<span class="token comment">// if (dir === &quot;UP&quot; /* Direction.Up */) {</span>
<span class="token comment">//     console.log(&#39;go up!&#39;);</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-generics-泛型" tabindex="-1"><a class="header-anchor" href="#_7-generics-泛型" aria-hidden="true">#</a> 7.Generics（泛型）</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//不知道函数具体返回值类型时没法约束得到的值的类型</span>
<span class="token keyword">const</span> <span class="token function-variable function">getValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//const strs: any</span>

<span class="token comment">//当函数传入的参数类型不固定时, 固定类型不灵活</span>

<span class="token keyword">const</span> getValue <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//const strs: string </span>

<span class="token comment">//此时用泛型，泛型会根据具体的返回值进行类型推断，以此得到一个期望的返回值类型</span>
<span class="token comment">//需要占位表示 T,U....可以是任意字符的占位符</span>
<span class="token comment">//函数用function 定义</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getValue</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//const strs: &quot;123&quot; //没有传入具体类型约束的值，传入什么返回的就是什么</span>
<span class="token keyword">const</span> strs<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span> <span class="token comment">//const strs: string  进行string类型</span>
<span class="token keyword">const</span> strVal<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>    <span class="token comment">//进行string类型约束</span>
<span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span>strVal<span class="token punctuation">)</span>   <span class="token comment">//const strs: string  //返回string类型</span>

<span class="token comment">//多个泛型类型定义</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getValue</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//let result: [number, string]</span>
result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length  <span class="token comment">//报错 类型“number”上不存在属性“length”</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>  <span class="token comment">//5  string类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-1泛型约束" tabindex="-1"><a class="header-anchor" href="#_7-1泛型约束" aria-hidden="true">#</a> 7.1泛型约束</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//泛型约束</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength3</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>   <span class="token comment">//类型“T”上不存在属性“length”</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token comment">//约束为具有length属性的类型，数组</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength3</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>   
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token comment">//不够灵活，可能时object或者string等其他类型</span>
<span class="token comment">//可以用interface定义,泛型extends，interface所具有的特性约束</span>
<span class="token keyword">interface</span> <span class="token class-name">IWithLength</span> <span class="token punctuation">{</span>
    length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength3</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> IWithLength<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token keyword">let</span> str3 <span class="token operator">=</span> <span class="token function">getLength3</span><span class="token punctuation">(</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">)</span>   <span class="token comment">//let str3: string</span>
<span class="token keyword">let</span> str3 <span class="token operator">=</span> <span class="token function">getLength3</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment">//let str3: number[]</span>
<span class="token keyword">let</span> str3 <span class="token operator">=</span> <span class="token function">getLength3</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> 
<span class="token comment">// let str3: {</span>
<span class="token comment">//     length: number;</span>
<span class="token comment">//     name: string;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2泛型在类和接口中的使用" tabindex="-1"><a class="header-anchor" href="#_7-2泛型在类和接口中的使用" aria-hidden="true">#</a> 7.2泛型在类和接口中的使用</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> pops <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>pops<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pops<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// pops.toFixed is not a function</span>
<span class="token punctuation">}</span>

<span class="token comment">//用泛型约束</span>
<span class="token keyword">class</span> <span class="token class-name">Queue<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">push</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> pops <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>pops<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pops<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//接口中使用泛型</span>
<span class="token keyword">interface</span> <span class="token class-name">keyValue<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token constant">U</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> kv1<span class="token operator">:</span> keyValue<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> kv2<span class="token operator">:</span> keyValue<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;str&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>


<span class="token comment">//使用泛型重新定义数组</span>
<span class="token keyword">let</span> arr1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-类型别名、字面量、交叉类型" tabindex="-1"><a class="header-anchor" href="#_8-类型别名、字面量、交叉类型" aria-hidden="true">#</a> 8.类型别名、字面量、交叉类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//类型别名</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> <span class="token class-name">sumType</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>

<span class="token keyword">let</span> sums<span class="token operator">:</span> <span class="token function-variable function">sumType</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token function">sums</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> <span class="token class-name">a</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> str1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> str2<span class="token operator">:</span> a<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">stringOrNumber</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>

<span class="token keyword">const</span> str3<span class="token operator">:</span> stringOrNumber <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>

<span class="token keyword">const</span> str4<span class="token operator">:</span> stringOrNumber <span class="token operator">=</span> <span class="token number">100</span>


<span class="token comment">//字面量（基本类型）,经常配合枚举的常量使用，限定约束范围值</span>

<span class="token keyword">const</span> str5<span class="token operator">:</span> <span class="token number">100</span> <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">const</span> str6<span class="token operator">:</span> <span class="token number">100</span> <span class="token operator">=</span> <span class="token string">&#39;100&#39;</span>  <span class="token comment">//不能将类型“&quot;100&quot;”分配给类型“100”</span>

<span class="token keyword">const</span> str7<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">Directions</span> <span class="token operator">=</span> <span class="token string">&#39;UP&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;DOWN&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;LEFT&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;RIGHT&#39;</span>

<span class="token keyword">const</span> dir<span class="token operator">:</span> Directions <span class="token operator">=</span> <span class="token string">&#39;LEFT&#39;</span>

<span class="token keyword">const</span> dir1<span class="token operator">:</span> Directions <span class="token operator">=</span> <span class="token number">100</span>  <span class="token comment">//不能将类型“100”分配给类型“Directions”。</span>

<span class="token comment">//交叉类型(联合类型对应)</span>

<span class="token keyword">interface</span> <span class="token class-name">IName</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">IPersion</span> <span class="token operator">=</span> IName <span class="token operator">&amp;</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>

<span class="token keyword">let</span> persons<span class="token operator">:</span> IPersion <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function v(m,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,r,n("blockquote",null,[n("p",null,[n("a",k,[s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%B1%BB%E5%9E%8B"),c(a)])])]),d])}const y=e(i,[["render",v],["__file","indx.html.vue"]]);export{y as default};
