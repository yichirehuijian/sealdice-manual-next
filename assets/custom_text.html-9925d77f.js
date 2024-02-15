import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as r,a as t,d as e,b as a,w as s,f as p,e as i}from"./app-8df52869.js";const h="/sealdice-manual-next/assets/custom-text-main-0403f1d6.png",u="/sealdice-manual-next/assets/custom-text-great-success-dabfa89a.png",g="/sealdice-manual-next/assets/custom-text-add-option-b7a60fdb.png",m="/sealdice-manual-next/assets/custom-text-delete-option-4ceae9b3.png",f="/sealdice-manual-next/assets/custom-text-waiting-save-ef909755.png",_="/sealdice-manual-next/assets/custom-text-reset-bfee2141.png",x="/sealdice-manual-next/assets/custom-text-filter-8a4f9f7f.png",b="/sealdice-manual-next/assets/custom-text-pic-example-9149b0f7.png",v="/sealdice-manual-next/assets/custom-text-pic-show-732f4960.png",w="/sealdice-manual-next/assets/custom-text-with-var-80fe3fe3.png",C={},k=i('<h1 id="自定义文案" tabindex="-1"><a class="header-anchor" href="#自定义文案" aria-hidden="true">#</a> 自定义文案</h1><div class="hint-container info"><p class="hint-container-title">本节内容</p><p>本节将介绍自定义文案的设置，请善用侧边栏和搜索，按需阅读文档。</p></div><h2 id="什么是自定义文案" tabindex="-1"><a class="header-anchor" href="#什么是自定义文案" aria-hidden="true">#</a> 什么是自定义文案？</h2><blockquote><ul><li><p>骰子的回复内容太过单调，要怎样让它丰富起来呢？</p></li><li><p>骰子的回复内容太过繁琐，要怎样让它简洁起来呢？</p></li><li><p>我的骰子有自己的人设，怎么修改那些固定的回复词，让 TA 符合人设呢？</p></li><li><p>……</p></li></ul></blockquote><p>如果你想要修改骰子向用户回复的提示词，那么你就需要修改自定义文案。</p><p>海豹骰子的回复内容几乎可以进行完全的自定义，绝大部分指令的文案都可以进行修改。修改的文案内容还支持插入图片和 CQ 码。</p><h2 id="如何修改文案" tabindex="-1"><a class="header-anchor" href="#如何修改文案" aria-hidden="true">#</a> 如何修改文案？</h2><p>在海豹 UI 界面的「自定义文案」选项中，你可以看见文案被按照几个大类放置在一起。</p><figure><img src="'+h+'" alt="自定义文案设置页" tabindex="0" loading="lazy"><figcaption>自定义文案设置页</figcaption></figure><p>左侧是分类，可以看见，文案目前被分为以下几个大类：</p>',10),y=t("li",null,"CoC：内置的 CoC 支持相关的文案；",-1),z=t("li",null,"DND：内置的 DND 支持相关的文案；",-1),q=t("li",null,"其它：一些杂项文案设置；",-1),N=t("code",null,".jrrp",-1),B=t("li",null,"核心：海豹核心功能的文案。",-1),D=i('<p>在每一个分类中，都可以在右侧看见当前分类的「文案列表」与上方的「筛选」，接下来将依次介绍它们。</p><h3 id="文案列表" tabindex="-1"><a class="header-anchor" href="#文案列表" aria-hidden="true">#</a> 文案列表</h3><p>在「文案列表」中，每一个文案都以类似下图的格式展示，我们以「大成功」的文案来举例：</p><figure><img src="'+u+'" alt="大成功文案" width="65%" height="65%" tabindex="0" loading="lazy"><figcaption>大成功文案</figcaption></figure><p>可以看见，对于「大成功」文案，它归属于 <code>判定-常规</code> 这个小类中，结果有两行文案，这意味着骰子会 <strong>随机抽取</strong> 其中的一行文案来使用。例如：</p>',5),V={class:"hint-container note"},E=t("p",{class:"hint-container-title"},"示例",-1),F=i('<p>如果想要添加一行，那么点击左侧「加号」按钮：</p><figure><img src="'+g+'" alt="增加文案选项" width="65%" height="65%" tabindex="0" loading="lazy"><figcaption>增加文案选项</figcaption></figure><p>如果你觉得某一行不满意，点左侧「删除」按钮。当然，至少需要保留一个选项。</p><figure><img src="'+m+'" alt="删除文案选项" width="65%" height="65%" tabindex="0" loading="lazy"><figcaption>删除文案选项</figcaption></figure><p>修改好之后，不要忘记保存！</p><figure><img src="'+f+'" alt="等待保存" tabindex="0" loading="lazy"><figcaption>等待保存</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">尽早保存！</p><p>对文案的修改建议及时保存，同时注意 <strong>保存前不要切换左侧的分类</strong>，否则未保存的修改将丢失！</p></div><p>最后，如果你想回到初始设置，点击右上角的「刷子」图标。</p><figure><img src="'+_+'" alt="重置为初始设置" width="65%" height="65%" tabindex="0" loading="lazy"><figcaption>重置为初始设置</figcaption></figure><p>随后会弹出确认框，点击确定后，一切就是刚开始的样子了。</p><h3 id="筛选文案" tabindex="-1"><a class="header-anchor" href="#筛选文案" aria-hidden="true">#</a> 筛选文案</h3><p>我们可以看见，为了方便在本组中查找到对应的条目，在文案列表的上方都有着对应的「筛选」功能。</p><figure><img src="'+x+'" alt="文案筛选" tabindex="0" loading="lazy"><figcaption>文案筛选</figcaption></figure><ul><li>搜索：搜索文案的小类和具体文案名。</li><li>指定类别： <ul><li>全部：显示全部文案；</li><li>默认文案：显示当前大类下未修改过的文案；</li><li>修改过：已修改过的文案；</li><li>指定分组：选中后会多出一个「分组」下拉框，用于筛选出指定小类下的文案条目；</li><li>旧版文案：海豹的更新有时会调整和删除部分文案条目，但旧的数据不会删除。海豹从旧版升级后，可以通过此项筛选出那些不用的条目。</li></ul></li></ul><h3 id="文案的导入-导出" tabindex="-1"><a class="header-anchor" href="#文案的导入-导出" aria-hidden="true">#</a> 文案的导入/导出</h3><blockquote><ul><li><p>我不想自己一条条修改文案，如何快速导入？</p></li><li><p>我想给我的小伙伴分享我的文案，他们要如何导入进去？</p></li></ul></blockquote><p>如果需要导入/导出文案内容，可以点击右上角的「导入/导出」按钮进入页面复制粘贴，就能快速分享相关设置了。</p><div class="hint-container warning"><p class="hint-container-title">确认内容完整再导入</p><p>粘贴文案内容时，注意检查自己导入的内容是不是完整复制进来的。</p></div><h2 id="文案插入图片和-cq-码" tabindex="-1"><a class="header-anchor" href="#文案插入图片和-cq-码" aria-hidden="true">#</a> 文案插入图片和 CQ 码</h2><p>将图片放在骰子的适当目录（建议放在 <code>data/images</code>），再按照相应图片的路径插入这样一段文本即可。以图片 <code>data/images/sealdice.png</code> 为例：</p><p>插入文本为 <strong><code>[图:data/images/sealdice.png]</code></strong>。</p><p>例如修改骰子进群的文案：</p><figure><img src="'+b+`" alt="文案图片示例" width="65%" height="65%" tabindex="0" loading="lazy"><figcaption>文案图片示例</figcaption></figure><p>全文案为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;{核心:骰子名字}&gt; 已经就绪。可通过.help 查看指令列表\\n[图:data/images/sealdice.png]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果如下：</p><figure><img src="`+v+'" alt="文案回复图片效果" tabindex="0" loading="lazy"><figcaption>文案回复图片效果</figcaption></figure>',27),L=i('<h2 id="文案变量标签" tabindex="-1"><a class="header-anchor" href="#文案变量标签" aria-hidden="true">#</a> 文案变量标签</h2><p>你可能注意到，有些词条下面有这样的内容，如下图的 <code>$t群组骰子面数</code>：</p><figure><img src="'+w+'" alt="有变量标签的文案" width="65%" height="65%" tabindex="0" loading="lazy"><figcaption>有变量标签的文案</figcaption></figure><p>文案下方的标签代表了被默认文案所使用的特殊变量，你可以使用 <code>{变量名}</code> 来插入他们，例如 <code>{$t群组骰子面数}</code>。</p>',4),Q=i(`<h2 id="在一个文案中使用另一个文案" tabindex="-1"><a class="header-anchor" href="#在一个文案中使用另一个文案" aria-hidden="true">#</a> 在一个文案中使用另一个文案</h2><p>所有的自定义文案都可以嵌套使用，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这里是{核心：骰子名字}，我是一个示例
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认会被解析为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这里是海豹，我是一个示例
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">禁止递归嵌套！</p><p>千万不要递归嵌套，会发生很糟糕的事情！</p></div><h2 id="文案常见问题" tabindex="-1"><a class="header-anchor" href="#文案常见问题" aria-hidden="true">#</a> 文案常见问题</h2><h3 id="骰子进群和成为好友的问候语是哪个" tabindex="-1"><a class="header-anchor" href="#骰子进群和成为好友的问候语是哪个" aria-hidden="true">#</a> 骰子进群和成为好友的问候语是哪个？</h3><p><code>核心:骰子进群</code></p><p><code>核心:骰子成为好友</code></p><h2 id="更复杂的文案设置" tabindex="-1"><a class="header-anchor" href="#更复杂的文案设置" aria-hidden="true">#</a> 更复杂的文案设置</h2><blockquote><ul><li><p>我希望能根据骰点结果显示不同的文案，要怎么实现？</p></li><li><p>我希望骰子能有多套回复词，要如何设置？</p></li><li><p>……</p></li></ul></blockquote>`,12);function R(T,$){const n=d("RouterLink"),l=d("ChatBox");return c(),r("div",null,[k,t("ul",null,[y,z,q,t("li",null,[e("娱乐：内置 "),a(n,{to:"/use/fun.html"},{default:s(()=>[e("娱乐功能")]),_:1}),e(" 的相关文案，如 "),N,e(" 的文案；")]),t("li",null,[e("日志："),a(n,{to:"/use/log.html"},{default:s(()=>[e("跑团日志")]),_:1}),e(" 功能相关的文案;")]),B]),D,t("div",V,[E,a(l,{messages:[{content:".ra 力量",send:!0},{content:"<木落>的力量检定结果为:D100=3/30=([1d100=3]) 大成功！"},{content:".ra 力量",send:!0},{content:"<木落>的力量检定结果为:D100=2/30=([1d100=3]) 运气不错，大成功！"}]},null,8,["messages"])]),F,p(" 有无可能替换成ChatBox？ "),L,t("p",null,[e("除此之外，有些变量可以在所有文案中使用，具体列表可以见 "),a(n,{to:"/advanced/script.html#%E5%8F%98%E9%87%8F"},{default:s(()=>[e("进阶 - 内置脚本语言")]),_:1}),e("。")]),Q,t("p",null,[e("更复杂的文案设置涉及到逻辑的编写，见 "),a(n,{to:"/advanced/edit_complex_custom_text.html"},{default:s(()=>[e("进阶 - 编写复杂文案")]),_:1}),e("。")])])}const I=o(C,[["render",R],["__file","custom_text.html.vue"]]);export{I as default};
