/**
 * 字段适配器数据
 * fieldAdapter
 * 调用字段适配器的方法需要传两个参数
 * sysAdapter: "", // 系统字段 取 zykAdapter 或者 sykAdapter
 * typeAdapter: "",  // 类型字段 按资源类型取 bookAdapter 或者 videoAdapter 等等
 */

var FIELD_ADAPTER = {
    zykAdapter: { //资源库
        systemAdapter: { // 系统字段/顶层字段
            sysDocumentId: "SYS_DOCUMENTID", // 文档ID
            sysDoclibId: "SYS_DOCLIBID", // 文档库ID
            sysCreated: "SYS_CREATED", // 创建时间
            sysAuthor: "SYS_AUTHORS", // 作者
            sysTopic: "SYS_TOPIC", //主题
            sysHaveAttach: "SYS_HAVEATTACH", // 有无附件
            sbkIsbn: "SBK_ISBN", // 书号
            sbkMenu: "SBK_MENU", // 目录
            sbkPreface: "SBK_PREFACE", // 前言
            sbkSynopsis: "SBK_SYNOPSIS", // 简介
        },
        bookAdapter: { // 图书
            sysTopic: "SYS_TOPIC", // 书名
            sysAuthors: "SYS_AUTHORS", // 作者
            isbn: "ISBN", // 书号ISBN
            sysCreated: "BSYS_CREATED", // 入库日期
            pressName: "PRESS_NAME", // 出版社
            bookCata: "BOOK_CAT", // 图书分类
            editor: "EDITOR", // 责任编辑
            majorEditor: "MAJOR_EDITOR", // 主编
            printVersion: "PRINT_VERSION", // 印次
            bookVersion: "BOOK_VERSION", // 版次
            textNum: "TEXT_NUM", // 页数
            price: "PRICE", //价格
            productSize: "PRODUCT_SIZE", // 成品尺寸
            remark: "REMARK", // 备注
            pubdate: "PUBDATE", // 出版日期
            synopsis: "SYNOPSIS", //内容简介
        },
        videoAdapter: { // 视频
            sysTopic: "SYS_TOPIC", //视频名称
            mediaName: "MEDIA_NAME", // 系列名称
            sysCreated: "SYS_CREATED", // 入库时间
            isrcIsbn: "ISRC_ISBN",
            format: "FORMAT", // 文件格式
            mediaCat: "MEDIA_CAT", // 视频分类
            editor: "EDITOR", //责任编辑
            textEditor: "TEXT_EDITOR", //文字编辑
            pecorder: "RECORDER", //制作人
            pecoreTime: "RECORD_TIME", //出版时间
            description: "DESCRIPTION", //内容简介
            timeLength: "TIME_LENGTH", // 时长
            fileSize: "FILE_SIZE", //文件大小
            remark: "REMARK", //备注
            resourceId: "RESOURCEID", // 资源ID
            sysAuthor: "SYS_AUTHORS", // 作者
        },
        magAdapter: { // 期刊
            id: "id", //期刊id
            magType: "magType", // 期刊类型
            magName: "magName", // 期刊名称
            magIsrc: "magIsrc", //  这个不是图片
            magLanguage: "magLanguage", // 期刊语言类型
            magMainEditor: "magMainEditor", // 期刊上次修改人
            magDesc: "magDesc", // 期刊简介
            depart: "depart", //？？
            departid: "departid", //父级id？？
            departCascadid: "departCascadid", // 这厮是啥
            price: "price", //价格
            magNoCN: "magNoCN", //？？？
            magNoNational: "magNoNational", //
            magSize: "magSize", //
            magProductSize: "magProductSize", //
            reader: "reader", //
            pressName: "pressName", //
            magzg: "magzg", //
            printcompany: "printcompany", //
            cmsMagOrderMap: "cmsMagOrderMap", //
            PUBLISH_YEAR: 'PUBLISH_YEAR', //年份
        },
        candidateAdapter: { /* 活动的参赛人 */
            activityId: 'ACTIVITYID',
            /* 活动id */
            awardName: 'AWARD_NAME',
            /* 奖项名字 */
            awardType: 'AWARD_TYPE',
            /* 奖项类型 */
            description: 'DESCRIPTION',
            /* 描述 */
            pic: 'HEAD_PICTURE',
            /* 头像 */
            voteNum: 'VOTE_NUMBERNEW',
            /* 投票数量 */
            company:'COMPANY',
            /* 所属单位 */
        },
        activityAwardAdapter: {
            awardType: 'AWARD_TYPE',
            topic: 'SYS_TOPIC'
        }
    },
    sykAdapter: { // 索引库字段
        systemAdapter: { // 系统字段/顶层字段
            id: "id",
            pubId: "pubId",
            isCollect: "isCollect",
            isLike: "isLike",
            productId: "productId",
            productName: "productName",
            productSmallPic: "smallPic",
            productMidPic: "midPic",
            productBigPic: "bigPic",
            productResType: "resourseType",
            colId: "pub_col_id",
            colName: "pub_col_name",
            resId: "pub_resource_id",
            resName: "pub_resource_name",
            pubResType: "pub_resource_type",
            resCata: "pub_resource_cata",
            picMiddle: "pub_picMiddle",
            picSmall: "pub_picSmall",
            picBig: "pub_picBig",
            clickNum: "pub_click_num",
            likeNum: "pub_like_num",
            readNum: "pub_read_num",
            commentNum: "pub_comment_num",
            downloadsNum: "pub_downloads_num",
            salesNum: "pub_sales_num",
            siteId: "pub_site_id",
            starNum: "pub_star_num",
            poster: "pub_POSTER", // 海报图
            created: "pub_created",
            lastModified: "pub_lastmodified",
            contentType: "pub_content_type", // 书的类型  纸书：91 电子书 94
            resType: "prod_resource_type",
            salePrice: "prod_sale_price",
            memberPrice: "prod_member_price",
            parentId: 'pub_parent_id',
            fileRecordID: 'fileRecordID',
            isbuy: "isBuy",
            lowInventory: "lowInventory",
            inventory: "inventory",
            startTime: "startTime",
            endTime: "endTime"

        },
        bookAdapter: { // 图书
            sysTopic: "BOOK_SYS_TOPIC",
            sysAuthors: "BOOK_SYS_AUTHORS",
            seriesName: "BOOK_SERIES_NAME",
            isbn: "BOOK_ISBN",
            sysCreated: "BOOK_SYS_CREATED",
            pressName: "BOOK_PRESS_NAME",
            bookCata: "BOOK_BOOK_CAT",
            clcCat: "BOOK_CLC_CAT",
            orderObject: "BOOK_READER_OBJECT",
            editor: "BOOK_EDITOR",
            copyDesigner: "BOOK_COPY_DESIGNER",
            coverDesinger: "BOOK_COVER_DESIGNER",
            majorEditor: "BOOK_MAJOR_EDITOR",
            printVersion: "BOOK_PRINT_VERSION",
            bookVersion: "BOOK_BOOK_VERSION",
            textNum: "BOOK_TEXT_NUM",
            price: "BOOK_PRICE",
            shelfAdvice: "BOOK_SHELF_ADVICE",
            format: "BOOK_FORMAT",
            productSize: "BOOK_PRODUCT_SIZE",
            flatPlate: "BOOK_FLAT_PLATE",
            remark: "BOOK_REMARK",
            coverSoft: "BOOK_COVER_SOFT",
            textType: "BOOK_TEXT_TYPE",
            textColor: "BOOK_TEXT_COLOR",
            textSoft: "BOOK_TEXT_SOFT",
            pubdate: "BOOK_PUBDATE",
            materialId: "BOOK_MATERIAL_ID",
            language: "BOOK_LANGUAGE",
            departCascadId: "BOOK_DEPART_CASCADID",
            departId: "BOOK_DEPARTID",
            legalnotice: "BOOK_LEGALNOTICE",
            subtitle: "BOOK_SUBTITLE",
            fitment: "BOOK_FITMENT",
            printCompany: "BOOK_PRINT_COMPANY",
            synopsis: "BOOK_SYNOPSIS",
            printedSheets: "BOOK_PRINTED_SHEETS",
            proofEditor: "BOOK_PROOF_EDITOR",
            keywords: "BOOK_KEYWORDS",
            bookwords: "BOOK_WORDS",
            themeWord: "BOOK_THEME_WORD",
            ontology: "BOOK_ONTOLOGY",
            bookBsn: "BOOK_BSN",
            ebPrice: "BOOK_EB_PRICE",
            bookCatId: "BOOK_BOOK_CATID",
            bookCascadId: "BOOK_BOOK_CASCADID",
            clcCatId: "BOOK_CLC_CATID",
            clcCascadId: "BOOK_CLC_CASCADID",
            departId: "BOOK_DEPARTID",
            departCascadId: "BOOK_DEPART_CASCADID",
            pageNum: "BOOK_PAGE_NUM_BOOK",
            activityList: "activityList",
            bookFreeDownLoadPath: "bookFreeDownLoadPath",
            bookdownloadpath: "bookDownLoadPath",
            saleUrl:"BOOK_SALE_URL",
            isComment:"BOOK_IS_COMMENT"//是否可评论
        },
        newsAdapter: { // 资讯
            documentId: "information_SYS_DOCUMENTID",
            created: "information_SYS_CREATED", //创建时间
            lastModified: "information_SYS_LASTMODIFIED", // 最后修改时间
            isLocked: "	information_SYS_ISLOCKED",
            authors: "information_SYS_AUTHORS",
            topic: "information_SYS_TOPIC",
            haveAttach: "information_SYS_HAVEATTACH",
            type: "information_a_type",
            pubTime: "information_a_pubTime", // 发布时间
            realPubTime: "information_a_realPubTime", // 真实发布时间
            abstract: "information_a_abstract", //摘要
            content: "information_a_content",
            source: "information_a_source", //来源
            sourceUrl: "information_a_sourceUrl", // 来源链接
            subTitle: "information_a_subTitle", // 副标题
        },
        quesAdapter: { // 题库 [暂空]

        },
        editAdapter: { // 编辑 [暂空]

        },
        authorAdapter: { // 作者
            sysTopic: "ORGAUTHOR_SYS_TOPIC",
            nation: "ORGAUTHOR_NATION",
            sex: "ORGAUTHOR_SEX",
            specialty: "ORGAUTHOR_SPECIALTY",
            email: "ORGAUTHOR_EMAIL",
            qq: "	ORGAUTHOR_QQ",
            mailAddress: "ORGAUTHOR_MAIL_ADDRESS",
            phone: "ORGAUTHOR_PHONE",
            jobTitle: "ORGAUTHOR_JOB_TITLE",
            birth: "ORGAUTHOR_BIRTH",
            research: "ORGAUTHOR_RESEARCH",
            workAddress: "ORGAUTHOR_WORK_ADDRESS",
            intro: "ORGAUTHOR_INTRO"
        },
        activityAdapter: { // 活动
            created: "PORTAL_ACTIVITY_SYS_CREATED",
            lastModified: "PORTAL_ACTIVITY_SYS_LASTMODIFIED",
            currentStatus: "PORTAL_ACTIVITY_SYS_CURRENTSTATUS",
            sysTopic: "PORTAL_ACTIVITY_SYS_TOPIC",
            description: "PORTAL_ACTIVITY_DESCRIPTION",
            beginTime: "PORTAL_ACTIVITY_BEGIN_TIME",
            workType: "PORTAL_ACTIVITY_WORKTYPE",
            isComment: "PORTAL_ACTIVITY_IS_COMMENT",
            arealimt: "PORTAL_ACTIVITY_AREALIMT",
            classlimt: "PORTAL_ACTIVITY_CLASSLIMT",
            beginTimeStampNew: "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
            reviewTimeStampNew: "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW",
            endTimeStampNew: "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
            praiseSwicth: "PORTAL_ACTIVITY_PRAISE_SWITCH",
            isEndActivity: "PORTAL_ACTIVITY_IS_ENDACTIVITY",
            praiseDescription: "PORTAL_ACTIVITY_PRAISE_DESCRIPTION",
            arealimtid: "PORTAL_ACTIVITY_AREALIMTID",
            arealimtCascadId: "PORTAL_ACTIVITY_AREALIMT_CASCADID",
            classLimtid: "PORTAL_ACTIVITY_CLASSLIMTID",
            classLimtCascadId: "PORTAL_ACTIVITY_CLASSLIMT_CASCADID"
        },
        activityVoteAdapter: { /* 投票活动 */
            sysTopic: 'PORTAL_VOTEACTIVITY_SYS_TOPIC',
            description: 'PORTAL_VOTEACTIVITY_DESCRIPTION',
            endTimeStamp: 'PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW',
            beginTimeStamp:'PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW'
        },
        activityShowAdapter:{/* 展示类活动 */
            sysTopic: 'PORTAL_SHOWACTIVITY_SYS_TOPIC',
            description: 'PORTAL_SHOWACTIVITY_TEXTCONTENT',
        },
        videoAdapter: { // 视频 包括视频组
            sysTopic: "VIDEO-MEDIA_SYS_TOPIC",
            mediaName: "VIDEO-MEDIA_MEDIA_NAME",
            sysCreated: "	VIDEO-MEDIA_SYS_CREATED",
            mediaCat: "VIDEO-MEDIA_MEDIA_CAT",
            editor: "VIDEO-MEDIA_EDITOR",
            description: "VIDEO-MEDIA_DESCRIPTION",
            time: "VIDEO-MEDIA_TIME_LENGTH",
            price: "VIDEO-MEDIA_PRICE",
            resourceId: "VIDEO-MEDIA_RESOURCEID",
            video: "video",
            isComment:"VIDEO-MEDIA_IS_COMMENT",
            courseNumber: "GROUP_VIDEO_COURSES_NUMBER",
            courseDuration: "GROUP_VIDEO_COURSES_DURATION",
            coursePrice: "GROUP_VIDEO_PRICE", // 原价
            courseSalePrice: 'GROUP_VIDEO_SALE_PRICE', // 售价
            courseTitle: "GROUP_VIDEO_SYS_TOPIC",
            lecturer: "GROUP_VIDEO_LECTURER", // 讲师
            groupVideoDesc: "GROUP_VIDEO_DESCRIPTION", // 描述
        },
        videoGroupAdapter: { // 视频组 和 视频拆开  不要放在一起
          courseNumber: "GROUP_VIDEO_COURSES_NUMBER",
          courseDuration: "GROUP_VIDEO_COURSES_DURATION",
          coursePrice: "GROUP_VIDEO_PRICE", // 原价
          courseSalePrice: 'GROUP_VIDEO_SALE_PRICE', // 售价
          courseTitle: "GROUP_VIDEO_SYS_TOPIC",
          lecturer: "GROUP_VIDEO_LECTURER", // 讲师
          description: "GROUP_VIDEO_DESCRIPTION", // 描述
          isComment:"GROUP_VIDEO_IS_COMMENT",
        },
        audioAdapter: { // 音频
            fileSize: "AUDIO-MEDIA_FILE_SIZE",
            coverId: "AUDIO-MEDIA_COVERID",
            rescource: "AUDIO-MEDIA_RESOURCEID",
            themeWord: "AUDIO-MEDIA_THEME_WORD",
            ontology: "AUDIO-MEDIA_ONTOLOGY",
            keywords: "AUDIO-MEDIA_KEYWORDS",
            catId: "AUDIO-MEDIA_MEDIA_CATID",
            mediaCascadId: "AUDIO-MEDIA_MEDIA_CASCADID",
            departId: "AUDIO-MEDIA_DEPARTID",
            departCascadId: "AUDIO-MEDIA_DEPART_CASCADID",
            remotePath: "remotePath",
            refTable: "refTable",
            fileRecordID: "fileRecordID",
            remark: "AUDIO-MEDIA_REMARK",  //备注
            description: "AUDIO-MEDIA_DESCRIPTION",  // 内容简介
            recorder: "AUDIO-MEDIA_RECORDER"  // 制作人
        },
        audioGroupAdapter: { // 音频组
          agCat: "YINPINZU_CAT1",
          agCatCascadId: "YINPINZU_CAT1_CASCADID",
          coursesDuration: "YINPINZU_COURSES_DURATION",
          coursesNumber: "YINPINZU_COURSES_NUMBER",
          coverId: "YINPINZU_COVERID",
          agDescription: "YINPINZU_DESCRIPTION", // 描述信息
          description: 'YINPINZU_DESCRIPTION', 
          agFullText: "YINPINZU_FULL_TEXT",
          lecturer: "YINPINZU_LECTURER", // 讲师
          agPicNum: "YINPINZU_PIC_NUM",
          agPrice: "YINPINZU_PRICE", // 原价
          coursePrice: "YINPINZU_PRICE", // 原价
          agSalePrice: "YINPINZU_SALE_PRICE", // 售价
          courseSalePrice: "YINPINZU_SALE_PRICE", // 售价，视频组，音频组，资料组等的salePrice命名要相同，又不能与系统中的名称冲突。
          agAuthor: "YINPINZU_SYS_AUTHORS",
          agCreated: "YINPINZU_SYS_CREATED",
          agSysTopic: "YINPINZU_SYS_TOPIC",
          courseTitle: "YINPINZU_SYS_TOPIC"
        },
        columnAdapter: { // 栏目
            colId: "id", // 兼容宗教
            id: "id", //栏目id
            name: "name", // 栏目名称
            code: "code", //副标题
            url: "url",
            bigPic: "big_pic",
            smallPic: "small_pic",
            describe: "describe", //描述信息
            parentId: "parentId",
        },
        magazineAdapter: { // 期刊
            sysTopic: "MAGAZINE_SYS_TOPIC",
            isbn: "MAGAZINE_ISSN",
            cn: "MAGAZINE_CN",
            periodNum: "MAGAZINE_PERIOD_NUM",
            totalPeriod: "MAGAZINE_TOTAL_PERIOD",
            publishYear: "MAGAZINE_PUBLISH_YEAR",
            pressName: "MAGAZINE_PRESS_NAME",
            language: "MAGAZINE_LANGUAGE",
            majorEditor: "MAGAZINE_MAJOR_EDITOR",
            magCat: "MAGAZINE_MAG_CAT",
            editor: "MAGAZINE_EDITOR",
            coverDesigner: "MAGAZINE_COVER_DESIGNER",
            copyDesigner: "MAGAZINE_COPY_DESIGNER",
            magCycle: "MAGAZINE_MAG_CYCLE",
            pageNum: "MAGAZINE_PAGE_NUM",
            price: "MAGAZINE_PRICE",
            ebPrice: "MAGAZINE_EBPRICE",
            format: "MAGAZINE_FORMAT",
            textPaper: "MAGAZINE_TEXT_PAPER",
            color: "MAGAZINE_COLOR",
            textSoft: "MAGAZINE_TEXT_SOFT",
            coverSoft: "MAGAZINE_COVER_SOFT",
            flatPlate: "MAGAZINE_FLAT_PLATE",
            supportProduct: "MAGAZINE_SUPPORT_PRODUCT",
            productSize: "MAGAZINE_PRODUCT_SIZE",
            shelfAdvice: "MAGAZINE_SHELF_ADVICE",
            depart: "MAGAZINE_DEPART",
            readerObject: "MAGAZINE_READER_OBJECT",
            synopsis: "MAGAZINE_SYNOPSIS",
            remark: "MAGAZINE_REMARK",
            orderId: "MAGAZINE_ORDER_ID",
            publishDate: "MAGAZINE_PUBLISH_DATE",
            magId: "MAGAZINE_MAG_ID",
            publicationCatId: "MAGAZINE_PUBLICATION_CATID",
            publicationCascadId: "MAGAZINE_PUBLICATION_CASCADID",
            orientation: "MAGAZINE_ORIENTATION",
            sysCreated: "MAGAZINE_SYS_CREATED",
            keywords: "MAGAZINE_KEYWORDS",
            themeWord: "MAGAZINE_THEME_WORD",
            ontology: "MAGAZINE_ONTOLOGY",
            periodOrder: "MAGAZINE_PERIOD_ORDER",
            magCatId: "MAGAZINE_MAG_CATID",
            magCascadId: "MAGAZINE_MAG_CASCADID",
            departId: "MAGAZINE_DEPARTID",
            departCascadId: "MAGAZINE_DEPART_CASCADID",
            magZg: "MAGAZINE_MAG_ZG",  //主管主办
            isComment: "MAGAZINE_IS_COMMENT"
        },
        productArticleAdapter: { // 稿件
            sysTopic: "PRODUCT-ARTICLE_SYS_TOPIC",
            subTitle: "PRODUCT-ARTICLE_SUBTITLE",
            sysAuthors: "PRODUCT-ARTICLE_SYS_AUTHORS",
            language: "	PRODUCT-ARTICLE_LANGUAGE",
            abstract: "PRODUCT-ARTICLE_ABSTRACT",
            docSource: "PRODUCT-ARTICLE_DOCSOURCE",
            magazine: "PRODUCT-ARTICLE_MAGAZINE",
            engKeywords: "PRODUCT-ARTICLE_ENGKEYWORDS",
            columnName: "PRODUCT-ARTICLE_COLUMNNAME",
            ontology: "PRODUCT-ARTICLE_ONTOLOGY",
            keyWords: "PRODUCT-ARTICLE_KEYWORDS",
            themeWord: "PRODUCT-ARTICLE_THEME_WORD",
            authorUnit: "PRODUCT-ARTICLE_AUTHORUNIT",
            authorAddress: "PRODUCT-ARTICLE_AUTHORADDRESS",
            publishYear: "PRODUCT-ARTICLE_PUBLISH_YEAR",
            periodNum: "PRODUCT-ARTICLE_PERIOD_NUM",
            publishDate: "PRODUCT-ARTICLE_PUBLISHDATE",
            totalPeriod: "PRODUCT-ARTICLE_TOTAL_PERIOD",
            engAbstract: "PRODUCT-ARTICLE_ENGABSTRACT",
            resourceId: "PRODUCT-ARTICLE_RESOURCEID",
            knowCat: "PRODUCT-ARTICLE_KNOWCAT",
            reference: "PRODUCT-ARTICLE_REFERENCE",
            format: "PRODUCT-ARTICLE_FORMAT",
            knowCatId: "PRODUCT-ARTICLE_KNOWCATID",
            knowCascadId: "PRODUCT-ARTICLE_KNOWCASCADID",
            pages: "PRODUCT-ARTICLE_PAGES",
            paContent: "PRODUCT-ARTICLE_CONTENT",
            articleNature: "PRODUCT-ARTICLE_ARTICLE_NATURE"
        },
        imageAdapter: { //图片
            coverId: "MATERIAL-PIC_COVERID",
            picDesc: "MATERIAL-PIC_DESCRIPTION",
            picFileSize: "MATERIAL-PIC_FILE_SIZE",
            format: "MATERIAL-PIC_FORMAT",
            height: "MATERIAL-PIC_HEIGHT",
            width: "MATERIAL-PIC_WEIGHT",
            resourceId: "MATERIAL-PIC_RESOURCEID",
            authors: "MATERIAL-PIC_SYS_AUTHORS",
            sysTopic: "MATERIAL-PIC_SYS_TOPIC",
            keyWords: "MATERIAL-PIC_KEYWORDS",
            remark: "MATERIAL-PIC_REMARK",
            picCat: "MATERIAL-PIC_PIC_CAT",
            pubTime: "pub_created",
            actTime: "MATERIAL-PIC_ACT_TIME",
            actSpot: "MATERIAL-PIC_ACT_SPOT",
            isComment:"MATERIAL-PIC_IS_COMMENT"//是否可以评论
        },
        talentAdapter: { // 人才招聘  库码:[BASIC_INFO]
            sysTopic: "SYS_TOPIC",  // 姓名  [SYS_TOPIC]
            nation:"NATION",    // 国别  [NATION]
            sex: "SEX",     // 性别  [SEX]
            specialty: "SPECIALTY",     // 报考专业  [SPECIALTY]
            race: "RACE",   // 民族  [RACE]
            email: "EMAIL",     // 电子邮箱  [EMAIL]
            qq:"QQ",// QQ  [QQ]
            mailAddress: "MAIL_ADDRESS",    // 通讯地址  [MAIL_ADDRESS]
            phone: "PHONE", // 联系电话  [PHONE]
            jobTitle:"JOB_TITLE",   // 职称  [JOB_TITLE]
            birth: "BIRTH", // 出生年月  [BIRTH]
            research:"RESEARCH",    // 研究方向  [RESEARCH]
            workAddress: "WORK_ADDRESS",    // 报考单位  [WORK_ADDRESS]
            resourceId: "RESOURCEID",   // 资源ID  [RESOURCEID]
            intro:"INTRO",  // 作者简介  [INTRO]
            sysAutors:"SYS_AUTHORS",    // 创建人  [SYS_AUTHORS]
            post:"POST",    // 职务  [POST]
            orgType:"ORG_TYPE",   // 机构作者机构类型  [ORG_TYPE]
            ThemeWord:"THEME_WORD", // 主题词  [THEME_WORD]
            ontology:"ONTOLOGY",   // 领域本体  [ONTOLOGY]
            description: "DESCRIPTION", // 补充资料说明  [DESCRIPTION]
            awardRecords: "AWARD_RECORDS",  // 奖惩成果  [AWARD_RECORDS]
            resourceName:"RESOURCE_NAME",  // 头像名称  [RESOURCE_NAME]
            sysCreated:"SYS_CREATED",    // 创建时间  [SYS_CREATED]
            authorCatid:"AUTHOR_CATID",   // 作者分类ID  [AUTHOR_CATID]
            authorCat:"AUTHOR_CAT", // 作者分类  [AUTHOR_CAT]
            authorCascadid:"AUTHOR_CASCADID",    // 作者分类级联ID  [AUTHOR_CASCADID]
            jsjsp: "JSJSP",     // 计算机水平  [JSJSP]
            adress:"ADRESS", // 生源地  [ADRESS]
            place: "PLACE",     // 考试地点  [PLACE]
            cat1: "CAT_1",  // 专业类别  [CAT_1]
            maritalStatus: "MARITAL_STATUS",    // 婚姻状况  [MARITAL_STATUS]
            health: "HEALTH",   // 健康状况  [HEALTH]
            height: "HEIGHT",      // 身高  [HEIGHT]
            qualification: "QUALIFICATION",     // 资格证书  [QUALIFICATION]
            activities: "ACTIVITIES",   // 社团活动  [ACTIVITIES]
            specialties: "SPECIALTIES",     // 专长  [SPECIALTIES]
            experience: "EXPERIENCE",   // 教育经历  [EXPERIENCE]
            achievements: "ACHIEVEMENTS",   // 学术成果  [ACHIEVEMENTS]
            internshipExperience: "INTERNSHIP_EXPERIENCE",  // 实习经历  [INTERNSHIP_EXPERIENCE]
            wordExperience: "WORK_EXPERIENCE",  // 工作经历  [WORK_EXPERIENCE]
            familySituation: "FAMILY_SITUATION",    // 家庭情况  [FAMILY_SITUATION]
            otherSituation: "OTHER_SITUATION",  // 其他情况  [OTHER_SITUATION]
            org: "ORG",     // 工作单位  [ORG]
            firstOrg: "FIRST_ORG",  // 单位性质  [FIRST_ORG]
            mailCode: "MAIL_CODE",  // 邮编  [MAIL_CODE]
            type: "TYPE",   // 考生身份  [TYPE]
            cardId: "CARD_ID",  // 身份证号  [CARD_ID]
            politicalStatus: "POLITICAL_STATUS",    // 政治面貌  [POLITICAL_STATUS]
            graduateInstitutions: "GRADUATE_INSTITUTIONS",  // 毕业院校  [GRADUATE_INSTITUTIONS]
            education: "EDUCATION", // 学历  [EDUCATION]
            degree: "DEGREE",   // 学位  [DEGREE]
            wysp: "WYSP",   // 外语水平  [WYSP]
            activiyid:"ACTIVITYID", // 活动ID  [ACTIVITYID]
            activiylibid:"ACTIVITYLIBID",// 活动库ID  [ACTIVITYLIBID]
            coverId: "COVERID",
            workYears: "WORK_YEARS"  // 工作年限
        },
        sampleBookAdapter:{  // 样书库  [PORTAL_YANGSHUKU]
            sysCreated:"SYS_CREATED",        // 入库日期  [SYS_CREATED]
            sysTopic:"SYS_TOPIC",      // 书名  [SYS_TOPIC]
            seriesName:"SERIES_NAME",    // 丛书名  [SERIES_NAME]
            isbn:"ISBN",   // ISBN  [ISBN]
            pressName:"PRESS_NAME",     // 出版社  [PRESS_NAME]
            clcCat:"CLC_CAT",    // 中图法分类  [CLC_CAT]
            readerObject:"READER_OBJECT",  // 读者对象  [READER_OBJECT]
            editor:"EDITOR",     // 责任编辑  [EDITOR]
            copyDesigner:"COPY_DESIGNER",  // 版式设计  [COPY_DESIGNER]
            sysAuthors:"SYS_AUTHORS",   // 作者  [SYS_AUTHORS]
            coverDesigner:"COVER_DESIGNER",   // 封面设计  [COVER_DESIGNER]
            majorEditor:"MAJOR_EDITOR",   // 主编  [MAJOR_EDITOR]
            printVersion:"PRINT_VERSION",   // 印次  [PRINT_VERSION]
            bookVersion:"BOOK_VERSION",    // 版次  [BOOK_VERSION]
            textNum:"TEXT_NUM",   // 页数  [TEXT_NUM]
            price:"PRICE",   // 定价  [PRICE]
            shelfAdvice:"SHELF_ADVICE",   // 上架建议  [SHELF_ADVICE]
            format:"FORMAT",   // 开本  [FORMAT]
            productSize:"PRODUCT_SIZE",   // 成品尺寸  [PRODUCT_SIZE]
            flatPlate:"FLAT_PLATE",   // 排版公司  [FLAT_PLATE]
            remark:"REMARK",   // 备注  [REMARK]
            coverSoft:"COVER_SOFT",   // 封面排版软件  [COVER_SOFT]
            textType:"TEXT_TYPE",   // 纸张  [TEXT_TYPE]
            textColor:"TEXT_COLOR",   // 正文色数  [TEXT_COLOR]
            textSoft:"TEXT_SOFT",   // 正文排版软件  [TEXT_SOFT]
            pubdate:"PUBDATE",   // 出版日期  [PUBDATE]
            materialId:"MATERIAL_ID",    // 物料号  [MATERIAL_ID]
            language:"LANGUAGE",    // 语种  [LANGUAGE]
            departCascadid:"DEPART_CASCADID",   // 部门分类级联ID  [DEPART_CASCADID]
            departid:"DEPARTID",     // 部门分类ID  [DEPARTID]
            legalnotice:"LEGALNOTICE",    // 法律声明  [LEGALNOTICE]
            subtitle:"SUBTITLE",      // 副标题  [SUBTITLE]
            fitment:"FITMENT",     // 装帧  [FITMENT]
            printCompany:"PRINT_COMPANY",      // 印制单位  [PRINT_COMPANY]
            printedSheets:"PRINTED_SHEETS",     // 印张  [PRINTED_SHEETS]
            proofEditor:"PROOF_EDITOR",   // 责任校对  [PROOF_EDITOR]
            copyrightMsg:"COPYRIGHT_MSG",  // 版权信息  [COPYRIGHT_MSG]
            keywords:"KEYWORDS",   // 关键词  [KEYWORDS]
            ebookCat:"EBOOK_CAT",  // 电子书分类  [EBOOK_CAT]
            words:"WORDS",  // 字数  [WORDS]
            isComment:"IS_COMMENT",     // 是否能评论  [IS_COMMENT]
            synopsis:"SYNOPSIS",   // 摘要  [SYNOPSIS]
            pageNumBook:"PAGE_NUM_BOOK",  // 页数  [PAGE_NUM_BOOK]
            cipinfo:"CIPINFO",    // 发行信息  [CIPINFO]
            themeWord:"THEME_WORD", // 主题词  [THEME_WORD]
            ebPrice:"EB_PRICE",   // 电子书价格  [EB_PRICE]
            ontology:"ONTOLOGY",     // 领域本体  [ONTOLOGY]
            bsn:"BSN",      // 社内书号  [BSN]
            name: "NAME",                         // 姓名  [NAME]
            school: "SCHOOL",                     // 执教学校  [SCHOOL]
            college: "COLLEGE",                   // 所属院系  [COLLEGE]
            profession: "PROFESSIONAL_TITLE",     // 职称  [PROFESSIONAL_TITLE]
            duty: "ADMINISTRATIVE_DUTIES",      // 行政职务  [ADMINISTRATIVE_DUTIES]
            teachLevel: "TEACHING_LEVEL",       // 教学层次  [TEACHING_LEVEL]
            email: "EMAIL",             // 邮箱地址  [EMAIL]
            presentWay: "PRESENTED_WAY",        // 赠书方式  [PRESENTED_WAY]
            address: "ADDRESS",     // 地址  [ADDRESS]
            course: "COURSE",       // 教授课程  [COURSE]
            scale: "SCALE",     // 授课学生规模  [SCALE]
            teachMaterial: "TEACHING_MATERIAL",     // 现用教材  [TEACHING_MATERIAL]
            cooPurpose: "COOPERATIVE_PURPOSE",      // 是否有与我社合作出版意向  [COOPERATIVE_PURPOSE]
            selectTopic: "SELECTED_TOPIC",      // 选题名称或方向  [SELECTED_TOPIC]
            otherOpinion: "OTHER_OPINIONS",     // 其他意见  [OTHER_OPINIONS]
            telephone: "TELEPHONE",      // 联系电话  [TELEPHONE]
            textbookTitle:"TEXTBOOK_TITLE",     // 教材名称  [TEXTBOOK_TITLE]
            stylebookStatus:"STYLEBOOK_STATUS",       // 状态  [STYLEBOOK_STATUS]
            trackingNumber:"TRACKING_NUMBER",    // 快递单号  [TRACKING_NUMBER]
            auditOpinion:"AUDIT_OPINION",      // 审核意见  [AUDIT_OPINION]
            expressCompany:"EXPRESS_COMPANY",    // 快递公司  [EXPRESS_COMPANY]
            weight:"WEIGHT",     // 重量(克)  [WEIGHT]
            inventory:"INVENTORY",  // 库存  [INVENTORY]
            saleUrl:"SALE_URL",   // 第三方销售URL  [SALE_URL]
            description:"DESCRIPTION",    // 简介  [DESCRIPTION]
            courseTime:"COURSE_TIME",    // 课时  [COURSE_TIME]
            courseNum:"COURSE_NUM",     // 课程数  [COURSE_NUM]
            loginName:"LOGIN_NAME"      // 登录名  [LOGIN_NAME]
            
        },
        ziliaozu: { // 资料组
          sysTopic: 'ZILIAOZU_SYS_TOPIC',
          courseTitle: "ZILIAOZU_SYS_TOPIC",
          cat: 'ZILIAOZU_CAT1',
          description: 'ZILIAOZU_DESCRIPTION',
          keywords: 'ZILIAOZU_KEYWORDS',
          sysAuthors: 'ZILIAOZU_SYS_AUTHORS',
          coverId: 'ZILIAOZU_COVERID',
          picNum: 'ZILIAOZU_PIC_NUM',
          themeWord: 'ZILIAOZU_THEME_WORD',
          created: 'ZILIAOZU_SYS_CREATED',
          ontology: 'ZILIAOZU_ONTOLOGY',
          coursesNumber: 'ZILIAOZU_COURSES_NUMBER',
          coursesDuration: 'ZILIAOZU_COURSES_DURATION',
          resPrice: 'ZILIAOZU_PRICE',
          coursePrice: 'ZILIAOZU_PRICE',
          resSalePrice: 'ZILIAOZU_SALE_PRICE',
          lecturer: 'ZILIAOZU_LECTURER',
          courseLength: 'ZILIAOZU_COURSE_LENGTH',
          courseNum: 'ZILIAOZU_COURSE_NUM',
          courseDuration: 'ZILIAOZU_COURSE_LENGTH',
          courseNumber: 'ZILIAOZU_COURSE_NUM',
          courseSalePrice: 'ZILIAOZU_SALE_PRICE',
          catId: 'ZILIAOZU_CAT1_ID',
          catCascadId: 'ZILIAOZU_CAT1_CASCADID'
        },
        ziliaoku: { // 资料库
          sysCreated: 'ZILIAOKU_SYS_CREATED',
          sysTopic: 'ZILIAOKU_SYS_TOPIC',
          seriesName: 'ZILIAOKU_SERIES_NAME',
          isbn: 'ZILIAOKU_ISBN',
          pressName: 'ZILIAOKU_PRESS_NAME',
          bookCat: 'ZILIAOKU_BOOK_CAT',
          clcCat: 'ZILIAOKU_CLC_CAT',
          readerObject: 'ZILIAOKU_READER_OBJECT',
          depart: 'ZILIAOKU_DEPART',
          editor: 'ZLIAOKU_EDITOR',
          designer: 'ZILIAOKU_COPY_DESIGNER',
          sysAuthors: 'ZILIAOKU_SYS_AUTHORS',
          coverDesinger: 'ZILIAOKU_COVER_DESIGNER',
          majorEditor: 'ZILIAOKU_MAJOR_EDITOR',
          printVersion: 'ZILIAOKU_PRINT_VERSION',
          bookVersion: 'ZILIAOKU_BOOK_VERSION',
          textNum: 'ZILIAOKU_TEXT_NUM',
          price: 'ZILIAOKU_PRICE',
          shelfAdvice: 'ZILIAOKU_SHELF_ADVICE',
          format: 'ZILIAOKU_FORMAT',
          productSize: 'ZILIAOKU_PRODUCT_SIZE',
          flatPlate: 'ZILIAOKU_FLAT_PLATE',
          remark: 'ZILIAOKU_REMARK',
          coverSoft: 'ZILIAOKU_COVER_SOFT',
          textType: 'ZILIAOKU_TEXT_TYPE',
          textColor: 'ZILIAOKU_TEXT_COLOR',
          textSoft: 'ZILIAOKU_TEXT_SOFT',
          pubDate: 'ZILIAOKU_PUBDATE',
          materialId: 'ZILIAOKU_MATERIAL_ID',
          language: 'ZILIAOKU_LANGUAGE',
          cascadId: 'ZILIAOKU_DEPART_CASCADID',
          description: 'ZILIAOKU_DESCRIPTION',
        },
        seriesBooks:{  // 丛书
            coverId: "GROUP_BOOK_COVERID",
            description: "GROUP_BOOK_DESCRIPTION",
            picNum: "GROUP_BOOK_PIC_NUM",
            sysAuthors: "GROUP_BOOK_SYS_AUTHORS",
            sysCreated: "GROUP_BOOK_SYS_CREATED",
            sysTopic: "GROUP_BOOK_SYS_TOPIC",
            type:"prod_product_type",        // type值 177
            picBig:"pub_picBig",        //  大图
            picMiddle:"pub_picMiddle",  // 中图
            picSmall:"pub_picSmall" ,    // 小图
            readnum:"pub_read_num"      // 阅读量
        },
        jinrongActivityAdapter:{  //金融活动
            jrcoverId: "JINRONGHUODONGKU_COVERID",
            description: "JINRONGHUODONGKU_DESCRIPTION",
            created: "JINRONGHUODONGKU_SYS_CREATED",
            sysCurrentStatus: "JINRONGHUODONGKU_SYS_CURRENTSTATUS",
            lastModified: "JINRONGHUODONGKU_SYS_LASTMODIFIED",
            sysTopic: "JINRONGHUODONGKU_SYS_TOPIC",
            workType: "JINRONGHUODONGKU_WORKTYPE"
        },
        signNameAdapter:{ // 报名库
            phone: "PHONE",  // 电话
            email:"EMAIL",  //邮箱
            sysTopic: "SYS_TOPIC",  // 作者 //报名人
            sex:"SEX",    // 性别
            birth:"BIRTH",   // 出生年月
            address: "WORK_ADDRESS",  // 工作单位
            activityId: "ACTIVITYID",  // 活动id
            activities: "ACTIVITIES",   // 活动名称
            activityLibId: "ACTIVITYLIBID",  // 活动库id
        },
        askAnswerAdapter:{ // 问答库
            queContent: "QUE_CONTENT",
            quesContent: "QUES_CONTENT"
        }
    }
};

export {
    FIELD_ADAPTER
};
