## 获取最新消息 ##
```
https://zhihu-daily.leanapp.cn/api/v1/last-stories
```
### 返回数据说明 ###
    date: 日期
    stories: 当日日报
    title: 日报标题
    images: 文章配图（小图）
    ga_prefix: 供 Google Analytics 使用
    type: 作用未知
    id: 文章唯一id
    multipic: 消息是否包含多张图片（仅出现在包含多图的新闻中）
    top_stories: 热门文章
## 获取文章具体内容
```
https://zhihu-daily.leanapp.cn/api/v1/contents/:id
例子：https://zhihu-daily.leanapp.cn/api/v1/contents/9386190
```
### 返回数据说明 ###
    body: HTML式的文章内容
    image-source: 图片的内容提供方。为了避免被起诉非法使用图片，在显示图片时最好附上其版权信息。
    title: 文章标题
    image: 文章配图（大图）。
    js: 供手机端 WebView 使用
    recommenders: 这篇文章的推荐者
    ga_prefix: 供 Google Analytics 使用
    type: 文章的类型
    id: 文章唯一id
    css: 供手机端 WebView 使用
## 获取过往消息
```
https://zhihu-daily.leanapp.cn/api/v1/before-stories/:date
例子：https://zhihu-daily.leanapp.cn/api/v1/before-stories/20170429
```
### 返回数据说明 ###
    date: 日期
    stories: 当日日报
    title: 日报标题
    images: 文章配图（小图）
    ga_prefix: 供 Google Analytics 使用
    type: 作用未知
    id: 文章唯一id
    multipic: 消息是否包含多张图片（仅出现在包含多图的新闻中）
## 获取文章额外信息
```
https://zhihu-daily.leanapp.cn/api/v1/contents/extra/:id
例子：https://zhihu-daily.leanapp.cn/api/v1/contents/extra/3942319
```
### 返回数据说明 ###
    long_comments: 长评论总数
    popularity: 点赞总数
    short_comments: 短评论总数
    comments: 评论总数
## 获取文章较长评论
```
https://zhihu-daily.leanapp.cn/api/v1/contents/#{id}/long-comments
例子：https://zhihu-daily.leanapp.cn/api/v1/contents/3942319/long-comments
```
### 返回数据说明 ###
    comments: 长评论列表，形式为数组
    author: 评论作者
    id: 评论者的唯一标识符
    content: 评论的内容
    likes: 评论所获『赞』的数量
    time: 评论时间
    avatar: 用户头像图片的地址
## 获取文章较短评论
```
https://zhihu-daily.leanapp.cn/api/v1/contents/#{id}/short-comments
例子：https://zhihu-daily.leanapp.cn/api/v1/contents/3942319/short-comments
```
### 返回数据说明 ###
    comments: 短评论列表，形式为数组（请注意，其长度可能为 0）
    author: 评论作者
    id: 评论者的唯一标识符
    content: 评论的内容
    likes: 评论所获『赞』的数量
    time: 评论时间
    avatar: 用户头像图片的地址
## 查看主题日报列表
```
https://zhihu-daily.leanapp.cn/api/v1/themes
```
### 返回数据说明 ###
    others: 其他条目
    color: 主题日报背景颜色
    thumbnail: 供显示的图片地址
    description: 主题日报的介绍
    id: 该主题日报的唯一id
    name: 主题日报名称
## 查看主题日报内容
```
https://zhihu-daily.leanapp.cn/api/v1/themes/:id
例子：https://zhihu-daily.leanapp.cn/api/v1/themes/2
```
### 返回数据说明 ###
    stories: 该主题日报中的文章列表
    images: 图像地址（小图）
    type: 类型，作用未知
    title: 文章的标题
    description: 该主题日报的介绍
    background: 该主题日报的背景图片（大图）
    color: 主题颜色
    name: 主题日报的名称
    image: 背景图片（小图）
    editors: 该主题日报的编辑
    url: 主编的知乎用户主页
    bio: 主编的个人简介
    id: 数据库中的唯一表示符
    avatar: 主编的头像
    name: 主编的姓名
    image_source: 图像的版权信息