
# 前端安全：预防XSS攻击

##### 随着互联网的高速发展，信息安全问题已经成为企业最为关注的焦点之一，而前端又是引发企业安全问题的高危据点。在移动互联网时代，前端人员除了传统的 XSS、CSRF 等安全问题之外，又时常遭遇网络劫持、非法调用 Hybrid API 等新型安全问题。当然，浏览器自身也在不断在进化和发展，不断引入 CSP、Same-Site Cookies 等新技术来增强安全性，但是仍存在很多潜在的威胁，这需要前端技术人员不断进行“查漏补缺”。

**本文讲解 XSS 主要包括：**

1. XSS 是什么
2. XSS 攻击的介绍
3. XSS 攻击的分类
4. XSS 攻击的预防和检测
5. XSS 攻击的总结


## XSS 是什么

Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息 如 Cookie、SessionID 等，进而危害数据安全。
为了和 CSS 区分，这里把攻击的第一个字母改成了 X，于是叫做 XSS。
XSS 的本质是：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信的，导致恶意脚本被执行。
而由于直接在用户的终端执行，恶意代码能够直接获取用户的信息，或者利用这些信息冒充用户向网站发起攻击者定义的请求。
在部分情况下，由于输入的限制，注入的恶意脚本比较短。但可以通过引入外部的脚本，并由浏览器执行，来完成比较复杂的攻击策略。
不仅仅是业务上的“用户的 UGC 内容”可以进行注入，包括 URL 上的参数等都可以是攻击的来源。在处理输入时，以下内容都不可信：
- 来自用户的 UGC 信息
- 来自第三方的链接
- URL 参数
- POST 参数
- Referer （可能来自不可信的来源）
- Cookie （可能来自其他子域注入）


## XSS 攻击的介绍

- 在 HTML 中内嵌的文本中，恶意内容以 script 标签形成注入。
- 在内联的 JavaScript 中，拼接的数据突破了原本的限制（字符串，变量，方法名等）。
- 在标签属性中，恶意内容包含引号，从而突破属性值的限制，注入其他属性或者标签。
- 在标签的 href、src 等属性中，包含  `javascript:`  等可执行代码。
- 在 onload、onerror、onclick 等事件中，注入不受控制代码。
- 在 style 属性和标签中，包含类似  `background-image:url("javascript:...");`  的代码（新版本浏览器可以防范）。
- 在 style 属性和标签中，包含类似  `expression(...)`  的 CSS 表达式代码（新版本浏览器可以防范）。

总之，如果开发者没有将用户输入的文本进行合适的过滤，就贸然插入到 HTML 中，这很容易造成注入漏洞。攻击者可以利用漏洞，构造出恶意的代码指令，进而利用恶意代码危害数据安全。


## XSS 攻击的分类

根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。


#### 存储型 XSS

存储型 XSS 的攻击步骤：
1. 攻击者将恶意代码提交到目标网站的数据库中。
2. 用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。


#### 反射型 XSS

反射型 XSS 的攻击步骤：
1. 攻击者构造出特殊的 URL，其中包含恶意代码。
2. 用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。
反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。
由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。
POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。


#### DOM 型 XSS

DOM 型 XSS 的攻击步骤：
1. 攻击者构造出特殊的 URL，其中包含恶意代码。
2. 用户打开带有恶意代码的 URL。
3. 用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。


## XSS 攻击的预防

通过前面的介绍可以得知，XSS 攻击有两大要素：
1. 攻击者提交恶意代码。
2. 浏览器执行恶意代码。

要通过“防止浏览器执行恶意代码”来防范 XSS。分为两类：
- 防止 HTML 中出现注入。
- 防止 JavaScript 执行时，执行恶意代码。


### 预防存储型和反射型 XSS 攻击

存储型和反射型 XSS 都是在服务端取出恶意代码后，插入到响应 HTML 里的，攻击者刻意编写的“数据”被内嵌到“代码”中，被浏览器所执行。
预防这两种漏洞，有两种常见做法：
- 改成纯前端渲染，把代码和数据分隔开。
- 对 HTML 做充分转义。


#### 纯前端渲染

纯前端渲染的过程：
1. 浏览器先加载一个静态 HTML，此 HTML 中不包含任何跟业务相关的数据。
2. 然后浏览器执行 HTML 中的 JavaScript。
3. JavaScript 通过 Ajax 加载业务数据，调用 DOM API 更新到页面上。

在纯前端渲染中，会明确的告诉浏览器：下面要设置的内容是文本（ `.innerText` ），还是属性（ `.setAttribute` ），还是样式（ `.style` ）等等。浏览器不会被轻易的被欺骗，执行预期外的代码了。
但纯前端渲染还需注意避免 DOM 型 XSS 漏洞（例如  `onload`  事件和  `href`  中的  `javascript:xxx`  等）。
在很多内部、管理系统中，采用纯前端渲染是非常合适的。但对于性能要求高，或有 SEO 需求的页面，仍然要面对拼接 HTML 的问题。


#### 转义 HTML

如果拼接 HTML 是必要的，就需要采用合适的转义库，对 HTML 模板各处插入点进行充分的转义。
常用的模板引擎，如 doT.js、ejs、FreeMarker 等，对于 HTML 转义通常只有一个规则，就是把  `&amp; < > " ' /`  这几个字符转义掉，确实能起到一定的 XSS 防护作用，但并不完善。完善 XSS 防护措施，要使用更完善更细致的转义策略。
例如 Java 工程里，常用的转义库为  `org.owasp.encoder` 。
HTML 的编码是十分复杂的，在不同的上下文里要使用相应的转义规则。


### 预防 DOM 型 XSS 攻击

DOM 型 XSS 攻击，实际上就是网站前端 JavaScript 代码本身不够严谨，把不可信的数据当作代码执行了。
在使用  `.innerHTML` 、 `.outerHTML` 、 `document.write()`  时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用  `.textContent` 、 `.setAttribute()`  等。
如果用 Vue/React 技术栈，并且不使用  `v-html` / `dangerouslySetInnerHTML`  功能，就在前端 render 阶段避免  `innerHTML` 、 `outerHTML`  的 XSS 隐患。
DOM 中的内联事件监听器，如  `location` 、 `onclick` 、 `onerror` 、 `onload` 、 `onmouseover`  等， `<a>`  标签的  `href`  属性，JavaScript 的  `eval()` 、 `setTimeout()` 、 `setInterval()`  等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，请务必避免。
如果项目中有用到这些的话，一定要避免在字符串中拼接不可信数据。


### 其他 XSS 防范措施

虽然在渲染页面和执行 JavaScript 时，通过谨慎的转义可以防止 XSS 的发生，但完全依靠开发的谨慎仍然是不够的。以下介绍一些通用的方案，可以降低 XSS 带来的风险和后果。


### Content Security Policy

严格的 CSP 在 XSS 的防范中可以起到以下的作用：
- 禁止加载外域代码，防止复杂的攻击逻辑。
- 禁止外域提交，网站被攻击后，用户的数据不会泄露到外域。
- 禁止内联脚本执行（规则较严格，目前发现 GitHub 使用）。
- 禁止未授权的脚本执行（新特性，Google Map 移动版在使用）。
- 合理使用上报可以及时发现 XSS，利于尽快修复问题。


### 输入内容长度控制

对于不受信任的输入，都应该限定一个合理的长度。虽然无法完全防止 XSS 发生，但可以增加 XSS 攻击的难度。


### 其他安全措施

- HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。
- 验证码：防止脚本冒充用户提交危险操作。


## XSS 攻击的检测

1. 使用通用 XSS 攻击字符串手动检测 XSS 漏洞。
2. 使用扫描工具自动检测 XSS 漏洞。
   可以使用自动扫描工具寻找 XSS 漏洞，例如 [Arachni](https://github.com/Arachni/arachni)、[Mozilla HTTP Observatory](https://github.com/mozilla/http-observatory/)、[w3af](https://github.com/andresriancho/w3af) 等。


## XSS 攻击的总结

1. 防范存储型和反射型 XSS 是后端 RD 的责任。而 DOM 型 XSS 攻击不发生在后端，是前端 RD 的责任。防范 XSS 是需要后端 RD 和前端 RD 共同参与的系统工程。
2. 转义应该在输出 HTML 时进行，而不是在提交用户输入时。
3. 不同的上下文，如 HTML 属性、HTML 文字内容、HTML 注释、跳转链接、内联 JavaScript 字符串、内联 CSS 样式表等，所需要的转义规则不一致。 业务 RD 需要选取合适的转义库，并针对不同的上下文调用不同的转义规则。

整体的 XSS 防范是非常复杂和繁琐的，不仅需要在全部需要转义的位置，对数据进行对应的转义。而且要防止多余和错误的转义，避免正常的用户输入出现乱码。
虽然很难通过技术手段完全避免 XSS，但可以总结以下原则减少漏洞的产生：

- **利用模板引擎** 开启模板引擎自带的 HTML 转义功能。例如： 在 ejs 中，尽量使用  `<%= data %>`  而不是  `<%- data %>` ； 在 doT.js 中，尽量使用  `{{! data }`  而不是  `{{= data }` ； 在 FreeMarker 中，确保引擎版本高于 2.3.24，并且选择正确的  `freemarker.core.OutputFormat` 。
- **避免内联事件** 尽量不要使用  `onLoad="onload('{{data}}')"` 、 `onClick="go('{{action}}')"`  这种拼接内联事件的写法。在 JavaScript 中通过  `.addEventlistener()`  事件绑定会更安全。
- **避免拼接 HTML** 前端采用拼接 HTML 的方法比较危险，如果框架允许，使用  `createElement` 、 `setAttribute`  之类的方法实现。或者采用比较成熟的渲染框架，如 Vue/React 等。
- **时刻保持警惕** 在插入位置为 DOM 属性、链接等位置时，要打起精神，严加防范。
- **增加攻击难度，降低攻击后果** 通过 CSP、输入长度配置、接口安全措施等方法，增加攻击的难度，降低攻击的后果。
- **主动检测和发现** 可使用 XSS 攻击字符串和自动扫描工具寻找潜在的 XSS 漏洞。
