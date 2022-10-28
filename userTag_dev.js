(function() {
        "use surict";
        const ApiUrl = {
            blog: 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?&host_mid=',
            concerns: 'https://api.bilibili.com/x/relation/followings?vmid=',
            medal: 'https://api.live.bilibili.com/xlive/web-ucenter/user/MedalWall?target_id='
        };
        const is_new = document.getElementsByClassName('item goback').length != 0; // 检测B站版本
        const Style_tagName = document.createElement('style');
        const Style_tagSize = document.createElement('style');
        const Style_tagPlace = document.createElement('style');
        const Style_script = document.createElement('style');
        const Html_script = document.createElement('div');
        const tagSizeDict = {
            small: `.tag-class,.tag-name{height: 12px;line-height: 12px;}.tag-font{transform: scale(0.5) translate(-50%, -50%);}`,
            middle: `.tag-class,.tag-name{height: 16px;line-height: 16px;}.tag-font{transform: scale(0.6) translate(-40%, -30%);}`
        };
        const tagHideDict = {
            true: `.tag-class {display:none;}`,
            false: `.tag-class {display:block;}`
        };
        const tagPlaceDict = {
            middle: `.userTag {display: inline-block;position: relative;text-align: center;border-width: 0px;vertical-align: text-top; margin-left: 4px;cursor: default;}`,
            sub: `.userTag {display: inline-block;position: relative;text-align: center;border-width: 0px;vertical-align: sub; margin-left: 4px;cursor: default;}`
        };
        Style_tagSize.innerHTML = tagSizeDict.middle;
        Style_tagName.innerHTML = tagHideDict.false;
        Style_tagPlace.innerHTML = tagPlaceDict.middle;
        Style_script.innerHTML = ` 
    .tag-name {
        border-color: rgba(169, 195, 233, 0.1803921568627451);
        color: rgba(87, 127, 184, 1);
        background-color: #9ebae833;
        float: left;
        text-align: center;
        border-width: 0.5px;
        border-style: solid;
        border-bottom-left-radius: 1px;
        border-top-left-radius: 1px;
    }
    
    .tag-class {
        position: relative;
        border-bottom-right-radius: 1px;
        border-top-right-radius: 1px;
        float: left;
        box-sizing: content-box;
        text-align: center;
        border-width: 0.5px;
        border-color: #f25d8e;
        border-style: solid;
        border-bottom-left-radius: 1px;
        border-top-left-radius: 1px;
        color: #f25d8e;
    }
    
    .tag-font {
        width: 200%;
        height: 200%;
        font-weight: 400;
        transform-origin: center;
        font-size: 20px;
        line-height: 24px;
    }
    
    .script-hide {
        position: fixed;
        right: 10px;
        bottom: 10px;
        width: 20px;
        height: 20px;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        color: #009688;
        background-color: #e2e1e2b3;
        border-radius: 5px;
        box-shadow: 2px 0px 4px 0px #0000002b;
    }
    
    .script-hide svg{
        width: 100%;
        height: 100%;
    }
    
    .script-hide:hover {
        background-color: #76cb9dc9;
        box-shadow: 2px 0px 4px 0px #76cb9d91;
    }
    
    .script-hide:hover svg path {
        fill: #ffffff;
    }
    .script-like{
        display: none;
        position: fixed;
        right: 10px;
        bottom: 40px;
        width: 20px;
        height: 20px;
        font-size: 15px;
        line-height: 26px;
        text-align: center;
        color: #009688;
        background-color: #e2e1e2b3;
        border-radius: 5px;
        box-shadow: 2px 0px 4px 0px #0000002b;
    }
    .script-like:hover{
        background-color: #76cb9dc9;
        box-shadow: 2px 0px 4px 0px #76cb9d91;
    }
    .script-like svg{
        width: 80%;
        height: 80%;
        margin-left: 1px;
    }
    .script-like:hover svg path {
        fill: #ffffff;
    }
    
    .tagbar-active {
        background-color: #ab85d1c9;
        box-shadow: 2px 0px 4px 0px #c893e291;
    }
    
    .tagbar-active svg path {
        fill: #ffffff;
    }
    
    .script-main {
        display: none;
        position: fixed;
        z-index: 999;
        right: 65px;
        bottom: 20px;
        background-color: #ffffff;
        color: #929292;
        height: 300px;
        width: 250px;
        border-radius: 4px;
        box-shadow: 0px 0px 4px 2px #0000002b;
        padding: 10px;
    }
    
    .tag-bar {
        width: 250px;
        height: 90%;
        margin-top: 30px;
    }
    
    .comment-bar {
        display: none;
        width: 250px;
        margin-top: 30px;
        height: 90%;
    }
    
    .setting-bar {
        display: none;
        width: 250px;
        margin-top: 30px;
    }
    
    svg.icon {
        width: 10px;
        height: 10px;
    }
    
    .tagbar-action {
        position: absolute;
        top: 2px;
        width: 15px;
        height: 15px;
        line-height: 15px;
        margin: 0;
        border-radius: 50%;
        background-color: #fff0;
        text-align: center;
        font-size: small;
        color: #929292;
    }

    .script-main input[type="checkbox"],input[type="radio"]{
        appearance: auto;
    }
    
    .tagbar-btn {
        background-color: #ffffff;
        color: #929292;
        height: 20px;
        margin: 5px 0px 5px 0;
        padding: 0 4px 0 4px;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        transform-origin: center;
        transform: scale(0.9) translate(-10%, -10%);
        font-size: 13px;
        text-align: center;
        box-shadow: #b1b1b13d 0px 0px 3px 2px;
    }
    
    .tagbar-btn:hover {
        color: #37a279ab;
    }
    
    .tagbar-btn:active {
        color: #b4b6ee;
    }
    
    .input-tag {
        margin-bottom: 4px;
        width: 74%;
        left: 20%;
        border-radius: 4px;
        border: solid 1px #b0b0b0;
    }
    
    .input-tag:focus {
        outline: none;
        background-color: #d5d5d559;
    }
    
    .tagbar-label {
        font-size: 12px;
        display: inline-block;
        margin-right: 10px;
    }
    
    #input-tagcolor {
        width: 52px;
        height: 20px;
        border-radius: 4px;
        border: solid 1px #b0b0b0;
    }
    
    .tags {
        display: inline-block;
        width: 40px;
        height: 20px;
        font-size: 12px;
        border-radius: 5px;
        color: #49414b;
        text-align: center;
        transform-origin: center;
        transform: scale(0.9) translate(-10%, -10%);
        line-height: 20px;
        background-color: #ededed;
        margin-left: 3px;
        margin-top: 5px;
        cursor: pointer;
        box-shadow: 0px 1px 5px 0 #00000033;
    }
    
    .tags:hover {
        background-color: #ced1d2c4;
    }
    
    .delete-tag {
        position: relative;
        top: -3px;
        right: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transform-origin: center;
        transform: scale(0.6) translate(-50%, -50%);
        font-size: 20px;
        color: #837171;
        line-height: 18px;
        background-color: #b2bfc67a;
        box-shadow: 0px 0px 3px 1px #00000033;
    }
    
    .delete-tag:hover {
        color: white;
        background-color: crimson;
    }
    
    .delete-tag:active {
        color: white;
        background-color: #f0f;
    }
    
    .tag-info {
        position: relative;
        margin-top: -20px;
        font-weight: bold;
    }
    
    .tagbar-taglist {
        margin-top: 2px;
        width: 97%;
        height: 51%;
        bottom: 0px;
        border-radius: 4px;
        background-color: rgb(243, 238, 233);
        overflow-y: auto;
        padding: 4px;
    }
    
    .tagbar-commentlist {
        margin-top: 35px;
        width: 97%;
        height: 75.5%;
        bottom: 0px;
        border-radius: 4px;
        background-color: rgb(243, 238, 233);
        overflow-y: auto;
        padding: 4px;
    }
    
    .tagbar-taglist::-webkit-scrollbar,
    .tagbar-commentlist::-webkit-scrollbar,
    .medal-table::-webkit-scrollbar,
    #import-area::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }
    
    .tagbar-taglist::-webkit-scrollbar-thumb,
    .tagbar-commentlist::-webkit-scrollbar-thumb,
    .medal-table::-webkit-scrollbar-thumb,
    #import-area::-webkit-scrollbar-thumb {
        border-radius: 5px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
    }
    
    .tagbar-taglist::-webkit-scrollbar-track,
    .tagbar-commentlist::-webkit-scrollbar-track,
    .medal-table::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0px;
        background: rgba(0, 0, 0, 0.1);
    }
    
    .tagSize {
        margin: 5px 0 5px 0;
    }
    
    .tagSize-label {
        display: inline-block;
        text-align: center;
    }
    
    .tagSize-radio {
        vertical-align: text-bottom;
    }
    
    .set-label {
        font-size: 12px;
        display: inline-block;
        margin: 5px 0 5px 0;
    }
    
    .medalTag {
        margin-left: 5px;
        cursor: pointer;
    }
    
    .medal-table {
        display: none;
        position: absolute;
        padding: 5px;
        max-width: 230px;
        max-height: 160px;
        overflow-y: auto;
        font-size: 12px;
        background-color: #fffefd;
        border-radius: 5px;
        cursor: default;
        z-index: 2;
        box-shadow: 0px 0px 4px 2px #0000002b;
    }
    
    .fans-tag {
        float: left;
        margin: 4px 4px 4px 4px;
        border: solid 1px #6a99de;
        border-radius: 2px;
    }
    
    .fans-tag .tag-name {
        border: none;
        width: 18px;
    }
    
    #import-area {
        font-size: 10px;
        margin: 10px 0 0 0;
        max-width: 244px;
        min-width: 244px;
        height: 22px;
        min-height: 20px;
        max-height: 20px;
        background-color: #f3f3f3;
        border-radius: 5px;
    }
    
    #import-area:focus {
        outline: none;
    }
    
    .topnav {
        top: 8px;
        left: 5px;
        height: 20px;
        line-height: 20px;
        position: absolute;
        color: #8e8e8e;
        background-color: #ddddd98c;
        border-radius: 4px;
        cursor: default;
    }
    
    .topnav-active {
        color: #3f51b5;
        background-color: #ffffff;
        border-radius: 4px;
        height: 16px;
        line-height: 16px;
        box-shadow: 0 0 3px 1px #3f3d3d80;
    }
    
    .topnav-option {
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        padding: 0 5px 0 5px;
    }
    
    .topnav-option:nth-child(2) {
        margin: 0 38px 0 38px;
    }
    `;
        Html_script.innerHTML = `
    <div class='script-like'>
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" fill="#459cdd"></path>
        </svg>
    </div>
    <div class='script-hide'>
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path d="M593.949942 770.425747c2.908236-4.233418 4.614088-9.380648 4.614088-14.892175s-1.705851-10.658757-4.614088-14.922874L431.084621 577.00041c-10.32209-10.324136-10.32209-27.042913 0-37.381375l158.601204-159.117974c5.376451-4.843308 8.771781-11.818163 8.771781-19.61371 0-14.602579-11.83249-26.433022-26.434046-26.433022-5.953595 0-11.420097 1.979074-15.835663 5.298679l-5.300726 5.299703L375.020744 520.936533c-20.650319 20.647249-20.650319 54.114478 0 74.763774l177.556928 177.590698 1.811252 1.794879c4.690836 4.264117 10.903328 6.884804 17.740036 6.884804C581.18829 781.968641 589.183382 777.399579 593.949942 770.425747z" fill="#009688"></path>
        </svg>
    </div>
    <div class='script-main'>
        <div class="topnav">
            <div class="topnav-option topnav-active" id="tag-btn">成分标签</div>
            <div class="topnav-option" id="comment-btn">评论屏蔽</div>
            <div class="topnav-option" id="setting-btn">脚本设置</div>
        </div>
        <div class="scriptBar setting-bar">
            <input type="button" class="tagbar-btn" id="export-tag" value="导出配置" title="导出标签配置到剪切板" style="float:left; margin:0;">
            <input type="button" class="tagbar-btn" id="import-tag" value="导入配置" title="导入配置到油猴存储&#10;请先将配置粘贴到下方并确认无误，再点击本按键&#10;导入配置后请刷新界面以应用配置" style="float:right; margin:0;">
            <textarea id="import-area" placeholder="请在此处粘贴配置后点击【导入配置】"></textarea>
            <label class="set-label" title="除用户动态以外的用户标签检测选项（可多选）">检测选项
                    <label for="detect-concerns" title="检测用户关注列表" style="margin-left:20px">用户关注
                        <input type="checkbox" id="detect-concerns" style="margin-left:5px;height:11px">
                    </label>
            <label for="detect-medal" title="检测用户的粉丝勋章&#10;开启后用户标签末尾出现【勋章】标签，&#10;点击【勋章】展开勋章栏显示所有勋章&#10;鼠标放上显示对应Up主，点击可跳转&#10;点击【勋章】或空白处收起" style="margin-left:20px">
                        粉丝勋章<input type="checkbox" id="detect-medal" style="margin-left:5px;height:11px">
                    </label>
            </label>
            <div class="tagSize set-label">
                <label title="更改标签大小后刷新界面即可">标签大小</label>
                <div class="tagSzie-option" style="display:inline-block; margin-left: 20px;">
                    <label calss="tagSize-label">较小</label>
                    <input class="tagSize-radio" type="radio" name="tagSize" value="small" style="margin-left: 10px;">
                </div>
                <div class="tagSzie-option" style="display:inline-block; margin-left: 40px;">
                    <label calss="tagSize-label">标准</label>
                    <input class="tagSize-radio" type="radio" name="tagSize" value="middle" checked="true" style="margin-left: 10px;">
                </div>
            </div>
            <label class="set-label" for="tagname-hide" title="不显示标签分类，建议开启&#10;出现标签样式错误时请开启此项">标签不显示分类<input type="checkbox" id="tagname-hide" style="margin-left:50px;height:11px"></label>
            <label class="set-label" for="tag-merge" title="相同类型标签合并，只显示一个标签分类&#10;可能影响标签样式，建议同时打开【标签不显示分类】">同类型标签合并<input type="checkbox" id="tag-merge" style="margin-left:50px;height:11px"></label>
        </div>
        <div class="scriptBar tag-bar">
            <label class="tagbar-label" for="input-tagname" title="标签的分类，比如游戏、Vtuber、主播、UP主等&#10;用来识别标签类型，尽量短一些">标签分类</label><input type="text" id="input-tagname" class="input-tag" autocomplete="off">
            <label class="tagbar-label" for="input-tagtext" title="标签具体显示的内容，以区别每个标签">标签内容</label><input type="text" id="input-tagtext" class="input-tag" autocomplete="off">
            <label class="tagbar-label" for="input-tagreg" title="匹配用户标签的关键词，使用 & 和 | 分隔，使用 ( ) 组合&#10;多关键词任一匹配：王者荣耀或王者 =&gt; 王者荣耀|王者 &#10;多关键词同时匹配：王者荣耀与吃鸡 =&gt; 王者荣耀&吃鸡 &#10;多关键词组合匹配：(王者|王者荣耀)&(吃鸡|和平精英)">标签规则</label><input type="text" id="input-tagreg"
                class="input-tag" autocomplete="off">
            <label class="tagbar-label" for="input-tagcolor" title="标签文字颜色，可在面板中预览">标签颜色</label><input type="color" name="" id="input-tagcolor">
            <label class="tagbar-label" style="margin: 0 0 0 12px ;" for="tag-hide">屏蔽标签用户评论<input type="checkbox" id="tag-hide" style="margin-left:9px;height:11px"></label>
            <input type="button" class="tagbar-btn" id="add-tag" value="添加标签">
            <div class="tagbar-taglist"></div>
        </div>
        <div class="scriptBar comment-bar">
            <label class="tagbar-label" for="input-comment-reg" title="评论关键词屏蔽规则，同 【标签规则】">评论规则</label><input type="text" id="input-comment-reg" class="input-tag" autocomplete="off">
            <input type="button" class="tagbar-btn" id="add-comment-reg" style="float:left; margin:5px 0 5px 0;" value="添加规则">
            <div class="tagbar-commentlist"></div>
        </div>
    </div>`;
        const Head = document.head || document.querySelector('head');
        const Body = document.body || document.querySelector('body');
        Head.appendChild(Style_tagName);
        Head.appendChild(Style_script);
        Head.appendChild(Style_tagSize);
        Head.appendChild(Style_tagPlace);
        Body.appendChild(Html_script);
        const scriptHide = document.querySelector('.script-hide');
        const scriptMain = document.querySelector('.script-main');
        const topNav = document.querySelectorAll('.topnav-option');
        const scriptBar = document.querySelectorAll('.scriptBar');
        let tagname_hide = document.querySelector('#tagname-hide');
        let tag_merge = document.querySelector('#tag-merge');
        let detect_concerns = document.querySelector('#detect-concerns');
        let detect_medal = document.querySelector('#detect-medal');
        let tagSize_radio = document.querySelectorAll('.tagSize-radio');
        let import_tag = document.querySelector('#import-tag');
        let import_area = document.querySelector('#import-area');
        let tag_name = document.querySelector('#input-tagname');
        let tag_text = document.querySelector('#input-tagtext');
        let tag_reg = document.querySelector('#input-tagreg');
        let tag_color = document.querySelector('#input-tagcolor');
        let add_tag_btn = document.querySelector('#add-tag');
        let export_tag = document.querySelector('#export-tag');
        let taglist = document.querySelector('.tagbar-taglist');
        let tag_hide = document.querySelector('#tag-hide');
        let add_tag_reg = document.querySelector('#add-comment-reg');
        let comment_reg = document.querySelector('#input-comment-reg');
        let commentlist = document.querySelector('.tagbar-commentlist');
        // 界面隐藏
        scriptHide.onclick = () => {
            if (scriptMain.style.display === 'block') {
                scriptMain.style.display = 'none';
                scriptHide.classList.remove('tagbar-active');
            } else {
                scriptMain.style.display = 'block';
                scriptHide.classList.add('tagbar-active');
            }
        };
        // 界面切换
        topNav.forEach(btn => {
            btn.onclick = function() {
                topNav.forEach(i => {
                    i.classList.remove('topnav-active');
                });
                this.classList.add('topnav-active');
                scriptBar.forEach(i => {
                    i.style.display = 'none';
                });
                document.querySelector('.' + this.getAttribute('id').replace('btn', 'bar')).style.display = 'block';
            };
        });
        // 隐藏标签分类
        const TagNameHide = () => {
            Style_tagName.innerHTML = tagHideDict[String(tagname_hide.checked)];
            GM_setValue('TagNameHide', tagname_hide.checked);
        };
        tagname_hide.onclick = TagNameHide;
        detect_concerns.onclick = () => {
            tag_list.detectConcerns = detect_concerns.checked;
            GM_setValue('DetectConcerns', detect_concerns.checked);
        };
        detect_medal.onclick = () => {
            tag_list.detectMedal = detect_medal.checked;
            GM_setValue('DetectMedal', detect_medal.checked);
        };
        tag_merge.onclick = () => {
            tagMerge = tag_merge.checked;
            GM_setValue('TagMerge', tagMerge);
        };
        // 获取用户输入
        add_tag_btn.onclick = () => {
            if (tag_name.value && tag_text.value && tag_reg.value) {
                addTag({
                    tag: tag_name.value,
                    text: tag_text.value,
                    reg: tag_reg.value,
                    color: tag_color.value,
                    hide: tag_hide.checked
                });
                tag_name.value = '';
                tag_text.value = '';
                tag_reg.value = '';
                tag_hide.checked = false;
            } else {
                alert('请将标签信息补充完整');
            }
        };
        // 导出配置项到剪切板
        export_tag.onclick = () => {
            let exportData = {};
            let key_storage = GM_listValues();
            key_storage.forEach(i => {
                exportData[i] = GM_getValue(i, null);
            });
            GM_setClipboard(JSON.stringify(exportData));
            alert('已导出标签数据到剪切板！');
        };
        // 导入配置项到油猴
        import_tag.onclick = () => {
            if (import_area.value) {
                try {
                    let importData = JSON.parse(import_area.value);
                    Object.keys(importData).forEach(i => {
                        GM_setValue(i, importData[i]);
                    });
                } catch (e) {
                    alert('导入配置出错，请检查配置项');
                    return;
                }
                import_area.value = '';
                ConfigInit();
            } else {
                alert('配置为空！请先在输入框粘贴配置并检查无误后点击【导入配置】');
            }
        };
        // 更改标签大小
        const getTagSize = () => {
            for (let radio of tagSize_radio) {
                if (radio.checked) {
                    Style_tagSize.innerHTML = tagSizeDict[radio.value];
                    tagSize = radio.value;
                    GM_setValue('TagSize', tagSize);
                }
            }
        };
        tagSize_radio.forEach(radio => { radio.onclick = getTagSize; });
        add_tag_reg.onclick = () => {
            if (comment_reg.value) {
                addKeyWord(comment_reg.value);
                comment_reg.value = '';
            } else {
                alert('请将关键词正则信息补充完整');
            };
        };
        const addKeyWord = (reg_text) => {
            if (!keyword.includes(reg_text)) {
                let new_tag = insertTag(commentlist, reg_text);
                let keyword_index = Object.keys(comment_keyword).length;
                comment_keyword[keyword_index] = reg_text;
                keyword.push(reg_text);
                GM_setValue('Keyword', keyword);
                //移除标签
                let deleteTag = () => {
                    commentlist.removeChild(new_tag);
                    delete comment_keyword[keyword_index];
                    keyword = [];
                    let keyword_index_new = Object.keys(comment_keyword);
                    keyword_index_new.map(key => keyword.push(comment_keyword[key]));
                    GM_setValue('Keyword', keyword);
                };
                new_tag.children[0].onclick = deleteTag;
                new_tag.children[1].ondblclick = () => {
                    comment_reg.value = reg_text;
                    deleteTag();
                };
            }
        };
        // 添加并保存标签
        const addTag = (tag_dic) => {
            let title = `${tag_dic.tag}&#10;规则：${tag_dic.reg}&#10;隐藏评论：${tag_dic.hide}`;
            let new_tag = insertTag(taglist, tag_dic.text, tag_dic.color, title);
            let tag_index = Object.keys(tag).length;
            tag[tag_index] = tag_dic;
            tag_list.push(tag, tag_index);
            //移除标签
            let deleteTag = () => {
                taglist.removeChild(new_tag);
                tag_list.pop(tag, tag_index);
            };
            new_tag.children[0].onclick = deleteTag;
            new_tag.children[1].ondblclick = () => {
                tag_name.value = tag_dic.tag;
                tag_text.value = tag_dic.text;
                tag_reg.value = tag_dic.reg;
                tag_color.value = tag_dic.color;
                tag_hide.checked = tag_dic.hide;
                deleteTag();
            };
        };
        // 插入标签
        const insertTag = (parentNode, text, color = "#49414b", title = "") => {
            let new_tag = document.createElement('div');
            new_tag.innerHTML = `<div class="delete-tag">x</div><p class="tag-info" title="${title}">${text}</p>`;
            new_tag.classList.add('tags');
            new_tag.style.width = measureTextWidth("12px", text) + 8 + 'px';
            new_tag.style.color = color;
            parentNode.appendChild(new_tag);
            return new_tag;
        };
        // 计算文本字符串像素宽度
        const measureTextWidth = (fontSize, text) => {
            let fontFamily = "PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif";
            let canvas = document.createElement("canvas");
            let context = canvas.getContext("2d");
            context.font = fontSize + " " + fontFamily;
            let result = context.measureText(text);
            return Math.ceil(result.width);
        };
        // 标签
        class Tag {
            constructor(tag_dic) {
                this.tag = tag_dic.tag;
                this.tag_class = this.Str2Hex(this.tag);
                this.text = tag_dic.text;
                this.tagReg = new RegExp(tag_dic.text);
                this.reg = Tag.MultiReg(tag_dic.reg);
                this.hide = tag_dic.hide;
                this.color = tag_dic.color;
                this.tag_size = tagSize === 'middle' ? '15px' : '12px';
                this.tag_width = measureTextWidth(this.tag_size, this.tag);
                this.width = measureTextWidth(this.tag_size, this.text);
                this.list = new Set();
                this.nolist = new Set();
                this.tag_inner = `<div class='tag-name' style='color: ${this.color}; width:${this.width}px;'><div class='tag-font'>${this.text}</div></div>`;
                this.inner = `<div class='userTag ${this.tag_class}'><div class='tag-class' style='border-color:#8da8e8;color:#5e80c4; width:${this.tag_width}px'><div class='tag-font'>${this.tag}</div></div>${this.tag_inner}</div>`;
            };
            // 字符串转换成16进制
            Str2Hex(str) {
                    let hex = '';
                    for (let i = 0; i < str.length; i++) {
                        hex += str.charCodeAt(i).toString(16);
                    }
                    return 'tag-' + hex;
                }
                // 多关键词匹配正则
            static MultiReg(query) {
                    let regStr = query.indexOf('&') !== -1 ? `^${query.split('&').map(q => `(?=.*${q})`).join('')}.*` : query;
                return new RegExp(regStr);
        };
        // 检查列表中是否存在该用户 pid
        check(pid, c) {
            if (this.list.has(pid)) {
                if (this.hide) {
                    getCommentTextNode(c).innerText = '评论已屏蔽';
                }
                if (!this.tagReg.test(c.textContent)) {
                    if (c.querySelector('.' + this.tag_class) && tagMerge) {
                        c.querySelector('.' + this.tag_class).innerHTML += this.tag_inner;
                    }
                    else {
                        c.innerHTML += this.inner;
                    }
                }
            }
        }
        ;
        // 检测用户标签
        detect(pid, c, st) {
            //添加标签
            if (this.reg.test(st)) {
                if (this.hide) {
                    getCommentTextNode(c).innerText = '评论已屏蔽';
                }
                if (!this.tagReg.test(c.textContent)) {
                    if (c.querySelector('.' + this.tag_class) && tagMerge) {
                        c.querySelector('.' + this.tag_class).innerHTML += this.tag_inner;
                    } else {
                        c.innerHTML += this.inner;
                    }
                    this.list.add(pid);
                }
            } else {
                this.nolist.add(pid);
            }
        };
    }
    // 标签列表
    class TagList {
        constructor() {
            this.isDetect = false;
            this.detectConcerns = detect_concerns.checked;
            this.detectMedal = detect_medal.checked;
            this.list = [];
        }
        push(tag, index) {
            this.list.push(new Tag(tag[index]));
            GM_setValue('Tag', tag);
        }
        pop(tag, index) {
            delete tag[index];
            this.list = [];
            let tag_key = Object.keys(tag);
            tag_key.map(key => this.list.push(new Tag(tag[key])));
            GM_setValue('Tag', tag);
        }
        keyword(c) {
            // 评论关键词屏蔽
            if (keyword.length > 0) {
                let comment = getCommentTextNode(c);
                for (let reg of keyword) {
                    let Reg = Tag.MultiReg(reg);
                    if (Reg.test(comment.innerText)) {
                        comment.innerText = '评论已屏蔽';
                        break;
                    }
                }
            }
        }
        check(pid, c) {
            this.list.map(i => i.check(pid, c));
            // 判断列表中是否存在该用户id
            let tag0 = this.list[0];
            this.isDetect = (tag0.list.has(pid) || tag0.nolist.has(pid)) ? true : false;
            if (this.isDetect && this.detectMedal) {
                this.MedalWall(pid, c);
            }
        }
        detect(pid, c) {
            const p1 = new Promise((resolve) => { Requests(ApiUrl.blog + pid, (data) => { resolve(data); }); });
            const p2 = new Promise((resolve) => { Requests(ApiUrl.medal + pid, (data) => { resolve(data); }); });
            const p3 = new Promise((resolve) => { Requests(ApiUrl.concerns + pid + '&pn=1&ps=50', (data) => { resolve(data); }); });
            let p = [];
            if (this.detectConcerns && this.detectMedal) {
                p = [p1, p2, p3];
            }
            else if (this.detectConcerns && !this.detectMedal) {
                p = [p1, p3];
            }
            else if (!this.detectConcerns && this.detectMedal) {
                p = [p1, p2];
            }
            else {
                p = [p1];
            }
            // 异步函数合并返回的数据
            Promise.all(p).then((result) => {
                this.list.map(i => i.detect(pid, c, result.join('')));
                if (this.detectMedal) {
                    this.medal(pid, c, result[1]);
                }
            });
        }
        // 解析勋章墙数据到字典
        medal(pid, c, data) {
            let medal_list = JSON.parse(data).list;
            if (medal_list.length != 0) {
                let medalInfo = [];
                medal_list.forEach((e) => {
                    medalInfo.push({
                        targetName: e.target_name,
                        link: e.link,
                        medalName: e.medal_info.medal_name,
                        level: e.medal_info.level,
                        color: { start: '#' + e.medal_info.medal_color_start.toString(16).padStart(6, '0'),
                            end: '#' + e.medal_info.medal_color_end.toString(16).padStart(6, '0'),
                            border: '#' + e.medal_info.medal_color_border.toString(16).padStart(6, '0')
                        }
                    });
                });
                MedalDict[pid] = medalInfo;
                this.MedalWall(pid, c);
            }
        }
        // 添加勋章墙
        MedalWall(pid, c) {
            if (c.querySelector('.medalTag')) {
                return;
            }
            // 添加点击关闭勋章栏事件
            RunOnce(() => {
                window.addEventListener('click', (event) => {
                    let e = event || window.event;
                    let targetClass = e.target ? e.target.classList : e.srcElement.classList;
                    if (!targetClass.contains('medal-font')) {
                        document.querySelectorAll('.medal-table').forEach(e => {
                            e.style.display = 'none';
                        });
                    }
                });
            });
            let medal = MedalDict[pid];
            if (medal) {
                let medal_list = '';
                medal.forEach((e) => {
                    medal_list += `
                    <div class="fans-tag">
                    <div class="tag-name" title="${e.targetName}" style="width:${measureTextWidth('15px', e.medalName)}px;background-image: linear-gradient(90deg, ${e.color.start}, ${e.color.end});">
                    <div class="tag-font"><a href="${e.link}" style="color:#fff;">${e.medalName}</a></div></div>
                    <div class="tag-class" style="color:${e.color.end};"><div class="tag-font">${e.level}</div></div>
                    </div>`;
                });
                let medalInner = `
                <div class="medalTag">
                    <div class='tag-name' style="color: #fff;width:28px;background-image: linear-gradient(90deg,#ffcaec,#a187ff);">
                    <div class='tag-font medal-font'>勋章</div></div>
                    <div class="medal-table">${medal_list}</div>
                </div>`;
                c.innerHTML += medalInner;
                let medalBtn = c.querySelector('.medalTag');
                let table = c.querySelector('.medal-table');
                medalBtn.onclick = () => {
                    let disp = table.style.display;
                    table.style.left = medalBtn.offsetLeft + 50 + 'px';
                    table.style.display = disp === 'block' ? 'none' : 'block';
                };
            }
        }
    }
    // 单次执行函数  
    let RunOnce = function (func) {
        func.apply(arguments);
        RunOnce = () => { };
    };
    // 获取用户 id
    const getPid = (c) => {
        if (is_new) {
            return c.querySelector('.user-name,.sub-user-name').dataset.userId || c.querySelector('.name').dataset.usercardMid;
        } else {
            return c.querySelector('.name').getAttribute('data-usercard-mid') || c.children[0].href.replace(/[^\d]/g, "");
        }
    };
    // 获取评论内容节点
    const getCommentTextNode = (c) => {
        let comment;
        if (is_new) {
            if (c.classList.contains('user-info')) {
                comment = c.nextSibling.children[0];
            } else {
                comment = c.nextSibling;
            }
        } else {
            if (c.querySelector('.text-con')) {
                comment = c.querySelector('.text-con');
            } else {
                comment = c.nextSibling;
            }
        }
        return comment;
    };
    // 发起网络请求
    const Requests = (requestUrl, func) => {
        GM_xmlhttpRequest({
            method: "get",
            url: requestUrl,
            data: '',
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Concerns Gecko) Chrome/104.0.0.0 Safari/537.36'
            },
            onload: function (res) {
                if (res.status === 200) {
                    let data = JSON.stringify(JSON.parse(res.response).data);
                    func(data);
                }
                else {
                    console.log('加载用户信息失败');
                    console.log(res);
                }
            },
        });
    };

    // 读取油猴配置
    const ConfigInit = () => {
        // 修改油猴保存变量名，仅存在 3 个小版本
        tagname_hide.checked = GM_getValue('TagNameHide', false);
        TagNameHide();
        detect_concerns.checked = GM_getValue('DetectConcerns', false);
        detect_medal.checked = GM_getValue('DetectMedal', false);
        tag_list.detectMedal = detect_medal.checked;
        tag_list.detectConcerns = detect_concerns.checked;
        tagMerge = GM_getValue('TagMerge', false);
        tag_merge.checked = tagMerge;
        tagSize = GM_getValue('TagSize', 'middle');
        Style_tagSize.innerHTML = tagSizeDict[tagSize];
        tagSize_radio.forEach(radio => {
            if (radio.value == tagSize) {
                radio.checked = true;
            }
        });
        const key_storage = GM_getValue('Keyword', []);
        key_storage.map(key => addKeyWord(key));
        const tag_storage = GM_getValue('Tag', {});
        for (let key in tag_storage) {
            addTag(tag_storage[key]);
        }
    };
    // 初始化标签列表
    const tag = {};
    const tag_list = new TagList();
    const comment_keyword = {};
    const MedalDict = {};
    let keyword = [];
    // 读取油猴数据，设置
    let tagSize = 'middle';
    let tagMerge = false;
    ConfigInit();
    const webType = [/https:\/\/(t|space).bilibili.com/, /https:\/\/www.bilibili.com\/video/];
    let local_href = location.href;
    if (webType[0].test(local_href)) {
        // 动态、空间页面
        detect_medal.checked = false;
        detect_medal.disabled = true;
        tag_list.detectMedal = false;
    }
    else if (webType[1].test(local_href)) {
        // 视频页面
    }
    else {
        // 番剧、电影界面
        Style_tagPlace.innerHTML = tagPlaceDict.sub;
        detect_medal.checked = false;
        detect_medal.disabled = true;
        tag_list.detectMedal = false;
    }
    console.log('%c成分查询脚本已加载', 'color: #43bb88; font-size: 12px; font-weight: bolder');
    // 成分检测（刷新评论，检测、屏蔽标签）
    const IngredientDetection = (replyNode) => {
        replyNode.forEach(e => {
            let pid = getPid(e)
            //let text = getCommentTextNode(e)
            //console.log(pid, e, text)
            // 关键词屏蔽
            tag_list.keyword(e);
            if (tag_list.list.length == 0) {
                return;
            }
            tag_list.check(pid, e);
            if (tag_list.isDetect) {
                return;
            }
            // 标签列表中不含该用户 id 获取该用户近期动态内容
            tag_list.detect(pid, e);
        })

    };
    // 选择需要观察变动的节点
    //const targetNode = document.getElementById('app')
    //const targetNode = document.querySelector('.comment-container')
    // 观察器的配置（需要观察什么变动）
    const config = { attributes: false, childList: true, subtree: true };

    // 当观察到变动时执行的回调函数
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                [...mutation.addedNodes].map(item => {
                    if (item && item.classList) {
                        if (item.classList.contains('sub-reply-item') || item.classList.contains('reply-item')) {
                            // new page
                            let dynamic = [item]
                            let reply = [...item.querySelectorAll('.sub-reply-item > .sub-user-info,.content-warp > .user-info')];
                            if (reply.length > 0) {
                                dynamic = reply;
                            }
                            //console.log(dynamic)
                            IngredientDetection(dynamic)
                        }else if(item.classList.contains('reply-wrap')&&item.classList.contains('reply-item')){
                            // old page
                            let reply = [...item.querySelectorAll('.user')];
                            let dynamic = [item]
                            if(reply.length > 0){
                                dynamic = reply
                            }
                            //console.log(dynamic)
                            IngredientDetection(dynamic)
                        }
                    }
                })
            }
        }
    };
    let time1 = new Date();
    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback);
    let timer = setInterval(()=>{
        let targetNode = document.querySelector('.reply-list,.bili-dyn-list,.comment-list')
        if(targetNode){
            clearInterval(timer);
            let time2 = new Date()
            console.log('已加载脚本, 耗时：'+ (time2.getSeconds()-time1.getSeconds())+'s')
            console.log(targetNode)
            observer.observe(targetNode, config);
        }
    },1000)
    // 以上述配置开始观察目标节点
    //observer.observe(targetNode, config);

    // 之后，可停止观察
    // observer.disconnect();
})();