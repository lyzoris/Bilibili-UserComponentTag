## Bilibili【哔哩哔哩】 用户成分标签 ![bilibili](https://experiments.sparanoid.net/favicons/v2/www.bilibili.com.ico)

#### 作者：Lyzoris
#### 版本：2.3.2
#### 适用网页：Bilibili 视频页、个人动态页、用户空间页、番剧、电影等页面  
#### 代码&ensp;&ensp;&ensp;&ensp;[**userTag.ts**](https://github.com/lyzoris/BilibiliComments-userTag/blob/main/userTag.ts)&ensp;&ensp;&ensp;&ensp;[**userTag.js**](https://github.com/lyzoris/BilibiliComments-userTag/blob/main/userTag.js)
#### 油猴链接  &ensp;&ensp;&ensp;&ensp;[Bilibili【哔哩哔哩】 用户成分标签](https://greasyfork.org/zh-CN/scripts/451354)
#### 兼容性&ensp;&ensp;&ensp;&ensp;<img src=https://greasyfork.org/vite/assets/edge.e54a3dc2.svg width=20 height=20> Edge 80 or later   &ensp;&ensp;&ensp;&ensp;<img src=https://greasyfork.org/vite/assets/chrome.1b5cb774.svg width=20 height=20> Chrome 80 or later 
#### 描述
&ensp;&ensp;&ensp;&ensp;根据 Bilibili 评论区用户近期动态、粉丝勋章和关注Up主内容来给其添加自定义标签（面板可视化操作）  
&ensp;&ensp;&ensp;&ensp;可自定义标签内容、规则、样式，用户评论关键词屏蔽，显示用户全部粉丝勋章，去除评论区关键词跳转搜索

#### 功能
&ensp;&ensp;&ensp;&ensp;成分标签：自定义标签名称，标签内容，标签关键词规则，标签颜色，是否隐藏评论，用户粉丝勋章显示  

&ensp;&ensp;&ensp;&ensp;评论屏蔽：自定义评论屏蔽关键词规则（同【标签规则】），评论区、动态页面匹配到后将屏蔽该用户评论内容

&ensp;&ensp;&ensp;&ensp;其他功能：__【视频页】__ 用户勋章墙快捷显示，__【视频页】__ 去除关键词跳转，__【动态页】__ 评论结尾增加 收起评论 按键，__【动态页】__ 批量点赞动态

&ensp;&ensp;&ensp;&ensp;使用脚本：运行脚本后在B站视频和动态页面右下角会存在面板展开按键，点击展开进行标签配置和面板设置，再次点击即可隐藏

#### 说明 
&ensp;&ensp;&ensp;&ensp;由于 Bilibili 视频页面存在新、旧版本，脚本主要针对新版页面开发，故不能保证旧版页面体验良好  
&ensp;&ensp;&ensp;&ensp;作者不针对任何玩家或群体，不表达任何倾向，对于因为打标签行为而造成不愉快的用户，作者在此道歉  
#### 反馈   
&ensp;&ensp;&ensp;&ensp;脚本没有预设标签，如有标签分享和交流需要，可在评论区分享标签；如有标签功能疑问，也请在评论区留言  
&ensp;&ensp;&ensp;&ensp;脚本更新较慢，如有侵权、bug、任何功能上的意见和建议，请评论留言或私信，作者将尽早回复

#### 参考  
&ensp;&ensp;&ensp;&ensp;[新·三相之力指示器](https://greasyfork.org/zh-CN/scripts/451150)&ensp;&ensp;&ensp;&ensp;[原神玩家指示器](https://greasyfork.org/zh-CN/scripts/450720)

--------------------------
## 脚本使用说明

> ### 成分标签  

#### 配置内容  
- 标签分类 
- 标签内容 
- 标签规则 
- 标签颜色 
- 标签屏蔽
- 多标签合并  
   
#### 标签分类
&ensp;&ensp;&ensp;&ensp;用户标签的分类（比如游戏、Vtuber、Up主等），用以区分不同种类的标签，合并相同种类的标签。    
&ensp;&ensp;&ensp;&ensp;可在【脚本设置】中打开 标签不显示分类 关闭显示
#### 标签内容
&ensp;&ensp;&ensp;&ensp;用户标签显示的文本（比如原神、王者、嘉心糖等），用以区分每个标签，请确保每个标签内容不重复，以免混淆
#### 标签规则
 
&ensp;&ensp;__子标签__  
&ensp;&ensp;&ensp;&ensp;在用户的近期动态、关注、粉丝勋章中匹配相应标签的规则   
&ensp;&ensp;&ensp;&ensp;匹配用户标签的关键词，使用 & 和 | 分隔，使用 ( ) 组合  

&ensp;&ensp;&ensp;&ensp;示例：  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;多关键词任一匹配：王者荣耀或王者 -> 王者荣耀|王者   
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;多关键词同时匹配：王者荣耀与吃鸡 -> 王者荣耀&吃鸡   
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;多关键词组合匹配：(王者|王者荣耀)&(吃鸡|和平精英)  

&ensp;&ensp;__合并标签__  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;匹配子标签信息，合并子标签  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;使用 [ ] 包裹子标签内容    

&ensp;&ensp;&ensp;&ensp;示例：  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;合并 王者荣耀标签和原神标签 -> [王者荣耀][原神]  
#### 标签颜色
&ensp;&ensp;&ensp;&ensp;用户标签文本的颜色，可自定义以快捷分辨不同标签
#### 标签屏蔽
&ensp;&ensp;&ensp;&ensp;选择后可自动屏蔽该标签用户评论
#### 用户标签操作  
&ensp;&ensp;&ensp;&ensp;填写标签信息（标签分类、内容、规则、颜色等）  
&ensp;&ensp;&ensp;&ensp;点击 __添加标签__ 按键即可添加标签  
#### 多标签合并
&ensp;&ensp;&ensp;&ensp;示例见 __【标签规则】__- 合并标签   
&ensp;&ensp;&ensp;&ensp;功能：把多个标签合并成一个自定义标签  
&ensp;&ensp;&ensp;&ensp;创建合并后标签操作同上，需保证 待合并标签（子标签）存在     
&ensp;&ensp;&ensp;&ensp;只需修改合并后标签的 __标签规则__ 为 [待合并标签内容][待合并标签内容]...  
&ensp;&ensp;&ensp;&ensp;__注意：__ 需要将此标签在标签面板中的位置放置在 待合并标签 之后   
#### 标签显示面板
1. 添加标签后将显示在标签面板中，可对标签进行操作和预览 
2. 放上鼠标显示标签信息  
3. 双击标签可重新设置标签  
4. 点击标签左上方 x 号可删除标签  

> ### 评论屏蔽

#### 配置内容
- 评论规则

#### 评论规则
&ensp;&ensp;&ensp;&ensp;用户评论屏蔽规则，同 __【标签规则】__  
#### 评论屏蔽操作
&ensp;&ensp;&ensp;&ensp;填写评论规则，点击添加规则即可屏蔽相应关键词  
&ensp;&ensp;&ensp;&ensp;双击标签可重新设置标签  
&ensp;&ensp;&ensp;&ensp;点击标签左上方 x 号可删除标签  
> ### 脚本设置

#### 导入、导出配置
&ensp;&ensp;&ensp;&ensp;点击 导出配置 按键即可导出脚本配置到用户剪切板  
&ensp;&ensp;&ensp;&ensp;将配置粘贴到导入配置框中，点击 导入配置 即可导入用户配置
#### 检测选项
- 用户关注 -- 检测用户关注列表
- 粉丝勋章 -- 检测用户的粉丝勋章
- 用户动态 -- 检测用户近期动态（默认开启）

#### 标签大小
- 较小 
- 标准 网页文字标准大小

#### 刷新间隔
&ensp;&ensp;&ensp;&ensp;控制网页滚动时脚本检测刷新间隔时间（5-10s为宜）
#### 标签设置
- 标签不显示分类 -- 隐藏标签分类，缩小标签长度
- 同类型标签合并 -- 根据标签分类信息合并同类标签，缩小长度

#### 实验性功能
- 去除关键词跳转（视频页）
- 动态添加收起评论（动态页）-- 在动态末尾出现绿色 收起评论 按键
- 动态页批量点赞（动态页）-- 打开后在展开面板按键上方出现点赞按键

> ### 标签样式、面板操作示例
![成分标签](https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/cf.png)
![评论屏蔽](https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/pl.png)
![脚本设置](https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/sz.png)
![标签样式](https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/标签样式.png)


