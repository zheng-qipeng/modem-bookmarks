
# 小笔记



## git

+ 解决git Permission denied (publickey).
   1. 客户端生成ssh key(ssh-keygen -t rsa -C 'zheng.qipeng@qq.com')
   2. ssh -v git@github.com
   3. ssh-agent -s
   4. 打开 id_rsa.pub，复制在GitHub->SSH and GPG keys->New SSH key->生成
   5. 验证(ssh -T git@github.com)

+ push设置
   - git remote add origin https://github.com/zheng-qipeng/modem-bookmarks.git
   - git push -u origin master

+ 删除修改某次的commit记录
   - git rebase 命令
      1. git rebase -i (commit-id)
         * 此时跳出vim编辑器
            + 命令模式（刚启动默认该模式）
               1. a/A/i/I/o/O 切换输入模式
               2. : 切换末行模式
            + 输入模式
            + 末行模式（底线命令模式）
               1. :q 退出编辑器
               2. :q! 不保存并退出
               3. :w 保存文件及退出vi编辑器
               4. :w /root/XXX 将当前编辑的文件另存到/root目录下，文件名为XXX
               5. :wq或x 保存并退出
               6. 按ESC可随时退出末行模式
      2. rebase命令详解
         * pick 保留该commit（缩写 p）
         * reword 保留该commit 但是需要修改该commit的注释（缩写 r）
         * edit 保留该commit 但是需要修改该提交（不仅仅修改注释）（缩写 e）
         * squash 将该commit和前一个commit合并（缩写 s）
         * fixup 将该commit和前一个commit合并，但是不保留该commit提交的注释信息（缩写 f）
         * exec 执行shell命令（缩写 x）
         * drop 丢弃该commit（缩写 d）
      3. rebase错误详情
         1. git rebase --continue 用于修复冲突，提示开发者，一步一步解决冲突
         2. git rebase --abort（终止） 会回到rebase操作之前的状态，之前的提交的不会丢弃
         3. git rebase --skip（跳过） 会将引起冲突的commit丢弃掉



## npm

### npm install 报错集锦：

1. npm ERR! Failed at the gifsicle@4.0.1 postinstall script
    * 解决：执行 npm install gifsicle@4.0.1 --ignore-scripts
    * 原因：使用--ignore-scripts，会让npm避免执行package.json文件中的scripts脚本，只进行打包


2. npm下包出现 “the operation was rejected by your operating system” 错误
    * 解决方法： 删除npmrc文件（C:\Users\账户\npmrc文件）



## chrome

**chrome://flags**

1. Force Dark Mode for Web Contents（暗黑模式）



## windows

### windows 修改鼠标滚轮反向

**修改注册表**

```json
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\HID\"设备实例路径"\FlipFlopWheel=1(启用)
```

### windows 注册表删除失败

1. 权限-高级-所有者更改为Administrators(替换子容器)
2. 权限窗口更改完全控制权限(使用可从此对象继承的权限项目替换所有子对象的权限项目)

### windows 测试硬盘速度

**管理员权限**

```shell
 winsat disk -drive c
```



## 其它

+ selenium web自动化测试神器

+ thinkphp  php框架

+ 浏览器缓存
  - 浏览器缓存是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。
  - 浏览器缓存有下面的有点
    1. 减少冗余的数据传输
    2. 减少服务器负担
    3. 加快服务端加载网页的速度
  - 浏览器缓存是web性能优化的重要方式。
  - 过程：
  - 在浏览器第一次发起请求时，本地无缓存，向web服务器发送请求，服务器端响应请求，浏览器端缓存。过程如下
  	1. 第一次请求时，服务器会将页面最后修改时间通过Last-Modified（上次修改）标识由服务器发送给客户端，客户端记录，服务器还会生成一个Etag，并发送给客户端。
  	2. 浏览器后续再次请求时：
  	  + 浏览器缓存主要分为强缓存（本地缓存）和协商缓存（弱缓存）。
  	  + 浏览器请求某一资源时，会先获取该资源缓存的header信息，根据header中的Cache-Control（缓存控制）和Expires来判断是否过期。若没过期则直接从缓存中获取资源信息，包括缓存的header的信息，所以此次请求不会与服务器进行通信。（这里判断是否过期，是强缓存相关）
  	  + 如果显示已过期，浏览器会向服务器端发送请求，这个请求会携带第一次请求返回的有关缓存的header字段信息，比如客户端会通过If-None-Match头将先前服务器端发送过来的Etag发送给服务器，服务器会对比这个Etag是否与服务器的相同，若相同，就将If-None-Match的值设为false，返回状态304，客服端继续使用本地缓存，不解析服务器端发回来的数据，客户端还会通过If-Modified-Since头将先前服务器端发过来的最后修改时间戳发送给服务器，服务器端通过这个时间戳判断客服端的页面是否是最新的，如果不是最新的，则返回最新的内容，如果是最新的，则返回30，客户端继续使用本地缓存
  - 强制缓存
  	1. 强制缓存就是在第一次访问服务器取到数据之后，在过期时间之内不会再去重复请求。实现这个流程的核心就是如何知道当前时间是否超过了过期时间
  	2. 强制缓存的过期时间通过第一次访问服务器时返回的响应头获取。
  	  + 在http1.0 和http1.1 版本中通过不同的响应头字段实现
  	  	1. 在http1.0版本中，强制缓存通过Expires响应头来实现。Expires表示未来资源会过期的时间。也就是说，当发起请求的时间超过了expires设定的时间，即表示资源缓存时间到期，会发送请求到服务器重新获取资源。而如果发起请求的时间在expires限定的时间之内，浏览器会直接读取本地缓存数据库中的信息（from memory or from disk)，两种方式根据浏览器的策略随机获取
  	  	2. 在http1.1版本中，强制缓存通过Cache-Control响应头来实现。Cache-Control拥有多个值：
  	  	    - private：客户端可以缓存
  	  		- public：客户端和代理服务器均可缓存
  	  		- max-age=xxx：缓存的资源将在xxx秒后过期
  	  		- no-cache：需要使用协商缓存来验证是否过期
  	  		- no-store：不可缓存
  	      + 最常用的字段是max-age=xxx，表示缓存的资源将在xxx秒后过期，一般来说，为了兼容，两个版本的强制缓存都会被实现
  	      + 总结：强制缓存只有首次请求才会跟服务器通信，读取缓存资源时不会发出任何请求，资源的Status状态码为200，资源的Size为from memory 或者from disk ，http1.1版本的实现优先级会高于http1.0版本的实现。
  - 协商缓存
    + 协商缓存与强制缓存的不同之处在于，协商缓存每次读取数据时都需要跟服务器通信，并且会增加缓存标识。在第一次请求服务器时，服务器会返回资源，并且返回一个资源的缓存标识，一起存到浏览器的缓存数据库。当第二次请求资源时，浏览器会首先将缓存标识发送给服务器，服务器拿到标识后判断标识是否匹配，如果不匹配，标识资源有更新，服务器会将数据和新的缓存标识一起返回到浏览器，如果缓存标识匹配，表示资源没有更新，并且返回304状态码，浏览器就读取本地缓存服务器中的数据。
    + 在http协议的1.0和1.1版本中也有不同的实现方式
	  1. 在http1.0版本中，第一次请求资源时服务器通过Last-Modified来设置响应头的缓存标识，并且把资源最后修改的时间最为值填入，最后将资源返回给浏览器。在第二次请求时，浏览器会首先带上If-Modified-Since 请求头去访问服务器，服务器会将If-Modified-Since中携带的时间与资源修改的时间匹配，如果时间不一致，服务器会返回新的资源，并且将Last-Modified值更新，作为响应头返回给浏览器。如果时间一致，表示资源没有更新，服务器返回304状态码，浏览器拿到响应状态码后从本地缓存数据中读取资源。这种方式有一个弊端，就是当服务器中的资源增加了一个字符，后来又把这个字符删掉，本身资源文件并没有发生变化，但修改时间发生了变化，当下次请求过来时，服务器也会把这个本来没有变化的资源重新返回给浏览器。
	  2. 在http1.1版本中，服务器通过Etag来设置响应头缓存标识。Etag的值由服务端生成。在第一次请求时，服务器会将资源和Etag一并返回给浏览器，浏览器将两者缓存到本地缓存数据库，在第二次请求时，浏览器会将Etag信息放到If-None-Match请求头去访问服务器，服务器收到请求后，会将服务器中的文件标识与浏览器发来的标识进行对比，如果不相同，服务器返回更新的资源和新的Etag，如果相同，服务器返回304。
        - 总结： 协商缓存每次请求都会与服务器交互，第一次是拿数据和标识的过程，第二次开始，就是浏览器询问服务器资源是否有更新的过程。每次请求都会传输数据，如果命中缓存，则资源的Status状态码为304而不是200。同样的，一般来讲为了兼容，两个版本的协商缓存都会被实现，http1.1版本的实现优先级高于http1.0版本的实现

+ transition 和 animate 区别
  - transition 是css中检测指定属性变化进行自动补间动画的属性
  - animate 是先指定好动画过程中的关键帧属性，进行动画的属性
  - 主要区别：transition需要触发一个事件才会随着时间改变其css属性；animate在不需要触发任何事件的情况下，也可以显式的随时间变化来改变元素css属性，达到一种动画的效果
