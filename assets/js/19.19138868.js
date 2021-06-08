(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{614:function(a,v,t){"use strict";t.r(v);var _=t(25),s=Object(_.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[a._v("#")]),a._v(" vim")]),a._v(" "),t("h2",{attrs:{id:"vi-vim编辑器使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vi-vim编辑器使用方法"}},[a._v("#")]),a._v(" vi/vim编辑器使用方法")]),a._v(" "),t("p",[t("strong",[a._v("vi编辑器是所有Unix及Linux系统下标准的编辑器，相当于Windows的记事本。")])]),a._v(" "),t("ul",[t("li",[a._v("vim具有程序编辑的能力，可以主动的以字体颜色辨别语法的正确性，方便程序设计；")]),a._v(" "),t("li",[a._v("vim可以当作vi的升级版本，可以用多种颜色的方式来显示一些特殊信息；")]),a._v(" "),t("li",[a._v("vim会依据文件扩展名或者文件内的开头信息，判断该文件的内容而自动的执行该程序的语法判断式，再以颜色来显示程序代码与一般信息；")]),a._v(" "),t("li",[a._v("vim里面加入了很多额外的功能，例如支持正则表达式的搜索、多文件编辑、块复制等；")])]),a._v(" "),t("h2",{attrs:{id:"_1-vi-vim是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vi-vim是什么"}},[a._v("#")]),a._v(" 1. vi/vim是什么？")]),a._v(" "),t("ol",[t("li",[a._v("Visual Interface，可视化接口")]),a._v(" "),t("li",[a._v("vim是vi improve，vi的增强版（具有语法着色等功能）")])]),a._v(" "),t("h2",{attrs:{id:"_2-vim模式有哪些-如何切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vim模式有哪些-如何切换"}},[a._v("#")]),a._v(" 2. vim模式有哪些？如何切换？")]),a._v(" "),t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("graph TD\n命令模式/默认--a/i/o/s/r--\x3e输入模式\n输入模式--esc--\x3e命令模式/默认\n命令模式/默认--:--\x3e末行模式\n末行模式--esc--\x3e命令模式/默认\n")])])]),t("blockquote",[t("p",[a._v("i  在当前光标所在字符的前面，转为输入模式")]),a._v(" "),t("p",[a._v("I  在光标所在行的行首，转为输入模式")]),a._v(" "),t("p",[a._v("a  在当前光标所在字符的后面，转为输入模式")]),a._v(" "),t("p",[a._v("A  在光标所在行的行尾，转为输入模式")]),a._v(" "),t("p",[a._v("o  在光标所在行的下方，新建一行，并转为输入模式")]),a._v(" "),t("p",[a._v("O  在光标所在行的上方，新建一行，并转为输入模式")]),a._v(" "),t("p",[a._v("s  删除光标所在字符")]),a._v(" "),t("p",[a._v("r  替换光标处字符")])]),a._v(" "),t("h2",{attrs:{id:"_3-使用vim如何打开文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用vim如何打开文件"}},[a._v("#")]),a._v(" 3. 使用vim如何打开文件？")]),a._v(" "),t("p",[a._v("vim /path  vim后跟文件路径及文件名，存在则打开，不存在则创建；")]),a._v(" "),t("h2",{attrs:{id:"_4-如何关闭文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何关闭文件"}},[a._v("#")]),a._v(" 4. 如何关闭文件？")]),a._v(" "),t("ul",[t("li",[a._v("末行模式：\n"),t("ul",[t("li",[a._v("w  保存")]),a._v(" "),t("li",[a._v("q  退出")]),a._v(" "),t("li",[a._v("wq  或  x  保存退出")]),a._v(" "),t("li",[a._v("q!  强制退出")]),a._v(" "),t("li",[a._v("w!  强制保存，管理员才有权限")])])]),a._v(" "),t("li",[a._v("命令模式：\n"),t("ul",[t("li",[a._v("zz  保存并退出")])])])]),a._v(" "),t("h2",{attrs:{id:"_5-移动光标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-移动光标"}},[a._v("#")]),a._v(" 5. 移动光标")]),a._v(" "),t("ul",[t("li",[a._v("命令模式：\n"),t("ol",[t("li",[a._v("逐字符移动：\n"),t("ul",[t("li",[a._v("h  左（#h  表示移动#个字符）")]),a._v(" "),t("li",[a._v("l  右")]),a._v(" "),t("li",[a._v("j  下")]),a._v(" "),t("li",[a._v("k  上")])])]),a._v(" "),t("li",[a._v("以单词为单位移动：\n"),t("ul",[t("li",[a._v("w  移到下一个单词的词首（#w  表示移动#个单词）")]),a._v(" "),t("li",[a._v("e  跳至当前或下一个单词的词尾")]),a._v(" "),t("li",[a._v("b  跳至当前或上一个单词的词首")])])]),a._v(" "),t("li",[a._v("行内跳转：\n"),t("ul",[t("li",[a._v("0  绝对行首")]),a._v(" "),t("li",[a._v("^  行首第一个非空白字符")]),a._v(" "),t("li",[a._v("$  绝对行尾")])])]),a._v(" "),t("li",[a._v("行间跳转：\n"),t("ul",[t("li",[a._v("G  最后一行")]),a._v(" "),t("li",[a._v("#G 跳转到第#行")])])])])])]),a._v(" "),t("h2",{attrs:{id:"_6-翻屏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-翻屏"}},[a._v("#")]),a._v(" 6. 翻屏：")]),a._v(" "),t("ul",[t("li",[a._v("命令模式：\n"),t("ul",[t("li",[a._v("Ctrl + f  向下翻一屏")]),a._v(" "),t("li",[a._v("Ctrl + b  向上翻一屏")]),a._v(" "),t("li",[a._v("Ctrl + d  向下翻半屏")]),a._v(" "),t("li",[a._v("Ctrl + u  向上翻半屏")])])])]),a._v(" "),t("h2",{attrs:{id:"_7-删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-删除"}},[a._v("#")]),a._v(" 7. 删除：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("命令模式：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("删除单个字符：")]),a._v(" "),t("ol",[t("li",[a._v("x")]),a._v(" "),t("li",[a._v("#x  删除#个字符")])])]),a._v(" "),t("li",[t("p",[a._v("删除命令：d")]),a._v(" "),t("p",[t("strong",[a._v("d命令跟跳转命令组合使用，例：")])]),a._v(" "),t("ul",[t("li",[a._v("dw  表示删除光标所在位置到下一单词词首所有字符")]),a._v(" "),t("li",[a._v("#dw（#de  #db）  删除光标所在处及向后第#个单词词首所有字符")]),a._v(" "),t("li",[a._v("dd  删除当前光标所在行")]),a._v(" "),t("li",[a._v("#dd 删除包含当前光标所在行内的#行")])])])])]),a._v(" "),t("li",[t("p",[a._v("末行模式：")]),a._v(" "),t("ol",[t("li",[a._v("StartADD，EndADDd  删除StartADD到EndADD位置的所有行，例如：10，15d：删除10到15行所有内容")]),a._v(" "),t("li",[a._v(".d  删除光标所在行")])])])]),a._v(" "),t("h2",{attrs:{id:"_8-粘贴命令-p"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-粘贴命令-p"}},[a._v("#")]),a._v(" 8. 粘贴命令（p）：")]),a._v(" "),t("ol",[t("li",[a._v("命令模式：\n"),t("ol",[t("li",[a._v("p  如果复制的为整行内容，则粘贴到光标所在行的"),t("strong",[a._v("下方")]),a._v("，如果复制的内容为"),t("strong",[a._v("非整行")]),a._v("，则粘贴至光标所在字符的"),t("strong",[a._v("后面")])]),a._v(" "),t("li",[a._v("P  如果复制的为整行内容，则粘贴到光标所在行的"),t("strong",[a._v("上方")]),a._v("，如果复制或删除的内容为"),t("strong",[a._v("非整行")]),a._v("，则粘贴至光标所在字符的"),t("strong",[a._v("前面")])])])])]),a._v(" "),t("h2",{attrs:{id:"_9-复制命令-y"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-复制命令-y"}},[a._v("#")]),a._v(" 9. 复制命令（y）：")]),a._v(" "),t("p",[t("strong",[a._v("用法同d命令")])]),a._v(" "),t("ol",[t("li",[a._v("命令模式：\n"),t("ol",[t("li",[a._v("yy  复制当前行")]),a._v(" "),t("li",[a._v("yw（y#w,ye,y#e,yb,y#b）  复制光标当前位置到下个单词词首内容")]),a._v(" "),t("li",[a._v("y#G  复制当前位置#行处的所有内容")])])]),a._v(" "),t("li",[a._v("末行模式：\n"),t("ol",[t("li",[a._v("StartADD，EndADDy  复制StartADD到EndADD位置的所有行，例如：10，15d：复制10到15行所有内容")]),a._v(" "),t("li",[a._v("+3y  复制当前位置向下3行")])])])]),a._v(" "),t("h2",{attrs:{id:"_10-修改-c"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-修改-c"}},[a._v("#")]),a._v(" 10. 修改（c）：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("**先删除内容，在转换为输入模式**\n\n1. c  用法同d\n")])])]),t("h2",{attrs:{id:"_11-替换-r"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-替换-r"}},[a._v("#")]),a._v(" 11. 替换（r）：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. r  单字符替换，替换光标选中字符\n2. R  替换模式\n")])])]),t("h2",{attrs:{id:"_12-撤销编辑操作-u-undo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-撤销编辑操作-u-undo"}},[a._v("#")]),a._v(" 12. 撤销编辑操作（u：undo）；")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. u  撤销前一次编辑操作\n2. #u  直接撤销#次操作\n3. Ctrl + r  撤销最近一次撤销操作\n")])])]),t("h2",{attrs:{id:"_13-重复前一次编辑操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-重复前一次编辑操作"}},[a._v("#")]),a._v(" 13. 重复前一次编辑操作")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. .  比如上一次dd删除了一行，现在输入 . 就可以重复dd删除行的操作\n")])])]),t("h2",{attrs:{id:"_14-可视模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-可视模式"}},[a._v("#")]),a._v(" 14. 可视模式：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 命令模式\n   1. v  按字符选取，键盘控制光标选取 划过 的区域\n   2. V  按矩形选取，键盘控制光标选取划过的行\n")])])]),t("h2",{attrs:{id:"_15-查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-查找"}},[a._v("#")]),a._v(" 15. 查找：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 末行模式：\n   * /PATHERN  从当前位置向后查找PATHERN \n   * ?PATTERN  从当前位置向前查找PATHERN\n   * n  向下查找\n   * N  向上查找\n")])])]),t("h2",{attrs:{id:"_16-查找并替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-查找并替换"}},[a._v("#")]),a._v(" 16. 查找并替换：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 末行模式（s）：\n\n   **ADDR1,ADDR2s/PATTERN/String/gi**\n\n   * ADDR1,ADDR2 表示地址，$和%表示全文\n   * g  表示全局替换\n   * i  表示忽略大小写\n")])])]),t("h2",{attrs:{id:"_17-vim打开多个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-vim打开多个文件"}},[a._v("#")]),a._v(" 17. vim打开多个文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 末行模式：\n   * :next  切换到下一个文件\n   * :prev  切换到上一个文件\n   * :last  切换到最后一个文件\n   * :first 切换到第一个文件\n   * :qa  退出全部文件\n")])])]),t("h2",{attrs:{id:"_18-分屏显示一个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18-分屏显示一个文件"}},[a._v("#")]),a._v(" 18. 分屏显示一个文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. vim打开文件后：\n   * Ctrl + w,s  水平拆分窗口\n   * Ctrl + w,v  垂直拆分窗口\n2. 在窗口间切换光标\n   * Ctrl + w,ARROW\n   * 比如  Ctrl+w,→（使用箭头方向键）  光标切换到右边的窗口\n   * 比如  Ctrl+w,h(左), j(下), k(上), l(右)  也可以切换窗口\n3. 末行模式：\n   * :qa  退出所有窗口\n")])])]),t("h2",{attrs:{id:"_19-分窗口编辑多个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19-分窗口编辑多个文件"}},[a._v("#")]),a._v(" 19. 分窗口编辑多个文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("* vim -o  水平分割显示\n* vim -O  垂直分割显示\n* 例如：**vim -o /etc/rc.sysinit /etc/inittab**  水平分割显示/etc/rc.sysinit和/etc/inittab 这2个文件\n")])])]),t("h2",{attrs:{id:"_20-将当前文件中部分内容保存为另外一个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20-将当前文件中部分内容保存为另外一个文件"}},[a._v("#")]),a._v(" 20. 将当前文件中部分内容保存为另外一个文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 末行模式：\n   * w  表示保存当前文件\n   * w /path/to/somewhere  将当前文件另存为到指定路径\n   * ADDR1,ADDR2w /path/to/somewhere  将ADDR1到ADDR2指定的地址文本，另存为到指定路径\n")])])]),t("h2",{attrs:{id:"_21-将另一个文件的内容填充在当前文件中-r表示读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_21-将另一个文件的内容填充在当前文件中-r表示读"}},[a._v("#")]),a._v(" 21. 将另一个文件的内容填充在当前文件中(r表示读):")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 末行模式：\n   * **r  /path/to/somefile**  例如：输入 :r /etc/inittab，会将 inittab文件的所有内容附加到当前文件光标所在的位置\n")])])]),t("h2",{attrs:{id:"_22-跟shell交互-vim末行模式执行shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_22-跟shell交互-vim末行模式执行shell"}},[a._v("#")]),a._v(" 22. 跟shell交互（vim末行模式执行shell）")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 末行模式：\n   * **! command**  例如：! ls /etc：列出/etc目录下所有文件及目录，按enter回到vim编辑状态\n")])])]),t("h2",{attrs:{id:"_23-高级话题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_23-高级话题"}},[a._v("#")]),a._v(" 23. 高级话题：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 末行模式：\n   1. 显示或取消行号：\n      * set nu（set number）  显示行号\n      * set nonu  取消显示行号\n   2. 忽略或区分字符大小写：\n      * set ic（set ignorecase）  忽略大小写\n      * set noignorecase  区分大小写\n   3. 设定自动缩进：\n      * set ai（set autoindent）  自动缩进\n      * set noai  取消自动缩进\n   4. 查找到的文本高亮或取消高亮显示：\n      * set hlsearch 高亮显示搜索到的文本\n      * set nohlsearch 取消高亮显示搜索到的文本\n   5. 语法高亮：\n      * syntax on  打开语法高亮显示\n      * syntax off  关闭语法高亮显示\n")])])]),t("h2",{attrs:{id:"_24-vim配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_24-vim配置文件"}},[a._v("#")]),a._v(" 24. vim配置文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("* 全局vim配置文件：`/etc/vimrc`\n* 个人vim配置文件：`~/.vimrc`\n")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);