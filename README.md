## Bilibili【哔哩哔哩】 用户成分标签 ![bilibili](https://experiments.sparanoid.net/favicons/v2/www.bilibili.com.ico)

### 作者：Lyzoris
### 版本：2.5.6
### 适用网页：Bilibili 视频页、个人动态页、用户空间页、番剧、电影等页面  
### 代码&ensp;&ensp;&ensp;&ensp;[**userTag.ts**](https://github.com/lyzoris/BilibiliComments-userTag/blob/main/userTag.ts)&ensp;&ensp;&ensp;&ensp;[**userTag.js**](https://github.com/lyzoris/BilibiliComments-userTag/blob/main/userTag.js)
#### 油猴链接  &ensp;&ensp;&ensp;&ensp;[Bilibili【哔哩哔哩】 用户成分标签](https://greasyfork.org/zh-CN/scripts/451354)
#### 兼容性&ensp;&ensp;&ensp;&ensp;<img src=https://greasyfork.org/vite/assets/edge.e54a3dc2.svg width=20 height=20> Edge 80 or later   &ensp;&ensp;&ensp;&ensp;<img src=https://greasyfork.org/vite/assets/chrome.1b5cb774.svg width=20 height=20> Chrome 80 or later   
### 描述
&ensp;&ensp;&ensp;&ensp;根据 Bilibili 评论区用户近期动态、转发动态、粉丝勋章和关注Up主 内容来给其添加自定义标签（面板可视化操作）  
&ensp;&ensp;&ensp;&ensp;可自定义标签内容、规则、样式，用户评论关键词屏蔽，显示用户全部粉丝勋章，去除评论区关键词跳转搜索  
### 功能
&ensp;&ensp;&ensp;&ensp;成分标签：自定义标签名称，标签内容，标签关键词规则，标签颜色，是否隐藏评论，用户粉丝勋章显示  

&ensp;&ensp;&ensp;&ensp;自定义屏蔽：自定义屏蔽关键词规则（正则表达式），在B站主页、评论区、动态页面屏蔽匹配到的内容，可屏蔽 __主页推荐__，__动态__，__评论__

&ensp;&ensp;&ensp;&ensp;其他功能：__【视频页】__ 用户勋章墙快捷显示，__【视频页】__ 去除关键词跳转，__【动态页】__ 评论末增加 收起评论 按键，__【动态页】__ 批量点赞动态

&ensp;&ensp;&ensp;&ensp;使用脚本：运行脚本后在B站视频和动态页面右下角出现面板展开按键，点击展开进行标签配置和面板设置，再次点击即可隐藏

### 说明 
&ensp;&ensp;&ensp;&ensp;由于 Bilibili 视频页面存在新、旧版本，脚本主要针对新版页面开发，故不能保证旧版页面体验良好  
&ensp;&ensp;&ensp;&ensp;作者不针对任何玩家或群体，不表达任何倾向，对于因为打标签行为而造成不愉快的用户，作者在此道歉  

### 标签示例
&ensp;&ensp;&ensp;&ensp;以下为标签示例数据，可复制后在脚本设置-导入配置中粘贴保存以启用（仅供参考，不针对任何玩家和用户）：
```json
{
    "AutoDetect":false,
    "BlockOption":{
        "User": false,
        "Comment": true,
        "Dynamic": true,
        "Video": true
    },
    "BlackList":[],
    "CloseComment":true,
    "DetectOption": {
        "Repost": true,
        "Concerns": true,
        "Medal": false
    },
    "DynamicLike":true,
    "Keyword":["答辩"],
    "NoJump":false,
    "Tag":{
        "0":{"tag":"Vtuber","text":"嘉心糖","reg":"嘉然","color":"#946845","hide":false},
        "1":{"tag":"Vtuber","text":"雏草姬","reg":"塔菲","color":"#1db0a2","hide":false},
        "2":{"tag":"游戏","text":"方舟","reg":"明日方舟","color":"#6600CC","hide":false},
        "3":{"tag":"游戏","text":"农药","reg":"王者荣耀|王者","color":"#2a7b83","hide":false},
        "4":{"tag":"游戏","text":"崩3","reg":"崩坏3|崩3","color":"#6487ce","hide":false},
        "5":{"tag":"游戏","text":"碧蓝","reg":"碧蓝航线","color":"#1b5ee4","hide":false},
        "6":{"tag":"游戏","text":"原神","reg":"原神","color":"#d237c5","hide":false},
        "7":{"tag":"双重","text":"原农","reg":"[原神][农药]","color":"#e89238","hide":false},
        "8":{"tag":"双重","text":"粥农","reg":"[方舟][农药]","color":"#644894","hide":false},
        "9":{"tag":"双重","text":"崩蓝","reg":"[崩3][碧蓝]","color":"#8abfda","hide":false},
        "10":{"tag":"三相","text":"三相之力","reg":"[农药][原神][方舟]","color":"#f36012","hide":false},
        "11":{"tag":"多重","text":"buff拉满","reg":"[三相之力][崩蓝]","color":"#e11e2d","hide":false}
    },
    "TagMerge":false,
    "TagClassHide":false
}
```
### 页面功能
以下表格为本脚本各功能在B站不同的页面是否生效（ __&#10003;__ 为功能可用， __&#10005;__ 为功能默认关闭或不可用）

<table style="text-align: center;">
    <tr>
        <th>功能</th>
        <th colspan=2>用户标签</th>
        <th colspan=4>自定义屏蔽</th>
        <th colspan=3>其他功能</th>
    </tr>
    <tr>
        <th>页面</th>
        <th>成分标签</th>
        <th>勋章栏</th>
        <th>主页推荐</th>
        <th>用户动态</th>
        <th>用户评论</th>
        <th>黑名单</th>
        <th>收起评论</th>
        <th>批量点赞</th>
        <th>去除跳转</th>
    </tr>
    <tr>
        <th title="https://www.bilibili.com">主页</th>
        <td>&#10005;</td>
        <td>&#10005;</td>
        <td>&#10003;</td>
        <td>&#10005;</td>
        <td>&#10005;</td>
        <td>&#10003;</td>
        <td>&#10005;</td>
        <td>&#10005;</td>
        <td>&#10005;</td>
    </tr>
    <tr>
        <th title="https://t.bilibili.com/*">动态页</th>
        <td>&#10003;</td>
        <td>&#10005;</td>
        <td>&#10005;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10005;</td>
    </tr>
    <tr>
        <th title="https://space.bilibili.com/*">空间页</th>
        <td>&#10003;</td>
        <td>&#10005;</td>
        <td>&#10005;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10005;</td>
    </th>
    <tr>
        <th title="https://www.bilibili.com/video/*">视频页</th>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10005;</td>
        <td>&#10005;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10005;</td>
        <td>&#10005;</td>
        <td>&#10003;</td>
    </tr>
    <tr>
        <th title="https://www.bilibili.com/bangumi/play/*">电影、番剧页</th>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10005;</td>
        <td>&#10005;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10005;</td>
        <td>&#10005;</td>
        <td>&#10003;</td>
    </tr>
</table>  

### 使用的库  
&ensp;&ensp;&ensp;&ensp;[ElementGetter](https://greasyfork.org/zh-CN/scripts/448895-elementgetter%E5%BA%93)&ensp;&ensp;&ensp;&ensp;[原文章链接](https://bbs.tampermonkey.net.cn/forum.php?mod=viewthread&tid=2726)
### 反馈   
&ensp;&ensp;&ensp;&ensp;脚本没有预设标签，如有标签分享和交流需要，可在评论区分享标签；如有标签功能疑问，也请在评论区留言  
&ensp;&ensp;&ensp;&ensp;脚本更新较慢，如有侵权、bug、任何功能上的意见和建议，请评论留言或私信，作者将尽早回复
### 参考  
&ensp;&ensp;&ensp;&ensp;[新·三相之力指示器](https://greasyfork.org/zh-CN/scripts/451150)

--------------------------
# 脚本使用说明

> ## 标签功能

## 成分标签   

### 标签检测
&ensp;&ensp;&ensp;&ensp;手动检测：点击用户头像后的“检测”按键以手动检测该指定用户的成分，请求数量少  
&ensp;&ensp;&ensp;&ensp;自动检测：自动检测评论区所有用户成分，需大量请求
### 标签分类
&ensp;&ensp;&ensp;&ensp;用户标签的分类（比如游戏、Vtuber、Up主等），用以区分不同种类的标签，合并相同种类的标签。    
&ensp;&ensp;&ensp;&ensp;可在【脚本设置】中打开 标签不显示分类 关闭显示
### 标签内容
&ensp;&ensp;&ensp;&ensp;用户标签显示的文本（比如原神、王者、嘉心糖等），用以区分每个标签，请确保每个标签内容不重复，以免混淆
### 标签规则
 
&ensp;&ensp;__子标签__  
&ensp;&ensp;&ensp;&ensp;在用户的近期动态、关注、粉丝勋章中匹配相应标签的规则   
&ensp;&ensp;&ensp;&ensp;匹配用户标签的关键词，使用 `&` 和 `|` 分隔，使用 `(` `)` 组合  

&ensp;&ensp;&ensp;&ensp;示例：  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;多关键词任一匹配：王者荣耀或王者 -> `王者荣耀|王者`   
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;多关键词同时匹配：王者荣耀与吃鸡 -> `王者荣耀&吃鸡`   
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;多关键词组合匹配：`(王者|王者荣耀)&(吃鸡|和平精英)`  

&ensp;&ensp;__合并标签__  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;匹配子标签信息，合并子标签  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;使用 `[` `]` 包裹子标签 ___标签内容___    

&ensp;&ensp;&ensp;&ensp;示例：  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;合并 王者荣耀标签和原神标签 -> `[王者荣耀][原神]`    

&ensp;&ensp;&ensp;&ensp;__注意：__ 合并标签在标签面板中的顺序必须在所有其子标签之后
### 标签颜色
&ensp;&ensp;&ensp;&ensp;用户标签文本的颜色，可自定义以快捷分辨不同标签
### 标签屏蔽
&ensp;&ensp;&ensp;&ensp;选择后可自动屏蔽该标签用户评论
### 多标签合并
&ensp;&ensp;&ensp;&ensp;示例见 __【标签规则】- [合并标签](#标签规则)__   
&ensp;&ensp;&ensp;&ensp;功能：把多个标签合并成一个自定义标签  
&ensp;&ensp;&ensp;&ensp;创建合并后标签操作同上，需保证 待合并标签（子标签）存在     
&ensp;&ensp;&ensp;&ensp;只需修改合并后标签的 ___标签规则___ 为 [待合并标签内容][待合并标签内容]...  
&ensp;&ensp;&ensp;&ensp;__注意：__ 合并标签在标签面板中的顺序必须在所有其子标签之后     
### 标签面板操作
1. 完善标签信息（标签分类、内容、规则、颜色等），点击 __“+”__ 添加标签后将显示在标签面板中，可对标签进行操作和预览 
2. 广光标放在标签上可显示标签信息  
3. 双击标签可重新设置标签信息  
4. 点击标签左上方 __x__ 按键可删除标签  

## 粉丝勋章

### 功能
&ensp;&ensp;&ensp;&ensp;打开【设置】-【粉丝勋章】即可在指定页面显示用户的粉丝勋章墙
### 显示效果  
&ensp;&ensp;&ensp;&ensp;在用户成分标签后出现 __”勋章“__按键，点击即可展开粉丝勋章栏，如想关闭勋章栏，点击任意空白处即可
### 注意
&ensp;&ensp;&ensp;&ensp;该功能只有部分页面可用，请查询 [__页面功能__](#页面功能)
> ## 评论屏蔽  
### 屏蔽选项  
&ensp;&ensp;&ensp;&ensp;【主页】__主页推荐__：按屏蔽规则匹配并屏蔽主页推荐视频  
&ensp;&ensp;&ensp;&ensp;【动态、空间页】__用户动态__：按屏蔽规则匹配并屏蔽用户动态  
&ensp;&ensp;&ensp;&ensp;【动态、视频页】__评论内容__：按屏蔽规则匹配并屏蔽评论内容  
&ensp;&ensp;&ensp;&ensp;【动态、视频页】__用户屏蔽__：需开启 ___评论内容___，可点击用户回复后的 __屏蔽__ 按键屏蔽用户评论，并将其加入黑名单
### 屏蔽规则
&ensp;&ensp;&ensp;&ensp;使用 [正则表达式](https://gitee.com/thinkyoung/learn_regex) 匹配并屏蔽用户评论
### 屏蔽操作
1. 填写屏蔽规则（正则），点击 __“+”__ （或按 回车键 ） 即可添加屏蔽规则  
2. 双击标签可重新设置屏蔽规则  
3. 点击标签左上方 x 按键可删除屏蔽规则      
### 屏蔽效果
&ensp;&ensp;&ensp;&ensp;手动或根据关键词屏蔽该用户评论后，将完全隐藏其评论以及其子评论的内容    

> ## 其他功能

### 收起评论
&ensp;&ensp;&ensp;&ensp;在动态、空间页点击展开查看用户动态的评论列表后，将在末尾处 ”查看更多评论“ 前增加 __收起评论__ 按键，点击即可收起当前动态评论列表
### 去除跳转
&ensp;&ensp;&ensp;&ensp;在视频等页面移除带有 __”放大镜“__ 的蓝色文本跳转样式，防止不小心跳转搜索
### 批量点赞
&ensp;&ensp;&ensp;&ensp;在动态、空间页面的脚本展开按键上增加 __点赞__ 按键，点击即可给当前部分动态自动批量点赞

> ## 脚本设置

### 导入、导出配置
&ensp;&ensp;&ensp;&ensp;点击 ___导出配置___ 按键即可导出脚本配置到用户剪切板  
&ensp;&ensp;&ensp;&ensp;将配置粘贴到导入配置框中，点击 ___导入配置___ 即可导入用户配置
### 检测选项-用户标签检测内容来源
- 用户动态 -- 检测用户近期动态（默认开启）
- 转发动态 -- 检测用户转发的动态内容（建议开启）
- 关注列表 -- 检测用户的关注列表内容
- 粉丝勋章 -- 检测用户的粉丝勋章

### 标签设置
- 标签不显示分类 -- 隐藏标签分类，缩小标签长度
- 同类型标签合并 -- 根据标签分类信息合并同类标签，缩小长度

### 其他功能
&ensp;&ensp;&ensp;&ensp;开启其他功能
> ## 标签样式、面板操作示例
<p class="half">
<img src="https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/tag.png" width="40%" alt="用户标签"/>
<img src="https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/block.png" width="40%" alt="评论屏蔽"/>
</p>
<p class="half">
<img src="https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/setting.png" width="40%" alt="脚本设置"/>
<img src="https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/标签样式.png" width="40%" alt="标签样式"/>
</p>
<p class="half">
<img src="https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/hide.png" width="40%" alt="展开按键"/>
<img src="https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/pb.png" width="40%" alt="屏蔽按键"/>
</p>
<p class="half">
<img src="https://github.com/lyzoris/BilibiliComments-userTag/blob/main/images/close.png" width="40%" alt="收起评论"/>
</p>
