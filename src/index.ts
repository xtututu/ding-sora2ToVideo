import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';
const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList(['api.exchangerate-api.com','token.yishangcloud.cn','pay.xunkecloud.cn']);

fieldDecoratorKit.setDecorator({
  name: 'AI 视频(Sora2)',
  // 定义AI 字段的i18n语言资源
  i18nMap: {
    'zh-CN': {
        'videoMethod': '模型选择',
        'videoPrompt': '视频提示词',
        'refImage': '参考图片',
        'size': '视频尺寸',
        'seconds': '视频时长',
        'errorTips1': 'AI 字段异常，维护中可联系开发者咨询',
        'errorTips2': '视频创建失败，请检查您的提示词或图片信息，Sora2不支持上传真人图像提示词不允许出现暴力等内容',
      },
      'en-US': {
        'videoMethod': 'Model selection',
        'videoPrompt': 'Video prompt',
        'refImage': 'Reference image',
        'size': 'Video size',   
        'seconds': 'Video duration',
        'errorTips1': 'Model selection is required',
        'errorTips2': 'Video creation failed, please check your prompt or image information, Sora2 does not support uploading real people images and does not allow violent content',
      },
      'ja-JP': {
        'videoMethod': 'モデル選択',
        'videoPrompt': 'ビデオ提示词',
        'refImage': '参考画像',
        'size': 'ビデオサイズ',   
        'seconds': 'ビデオ时长',
        'errorTips1': 'モデル選択は必須です',
        'errorTips2': 'ビデオ作成失敗、ヒントを確認してください。Sora2は人間画像をアップロードできません。暴力などの内容を含めることはできません',
      },
  },
  errorMessages: {
    // 定义错误信息集合
    'error1': t('errorTips1'),
    'error2': t('errorTips2'),
  },
  authorizations: 
    {
      id: 'auth_id',// 授权的id，用于context.fetch第三个参数指定使用
      platform: 'yishangcloud',// 授权平台，目前可以填写当前平台名称
      type: AuthorizationType.HeaderBearerToken, // 授权类型
      required: true,// 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
      instructionsUrl: "https://token.yishangcloud.cn/",// 帮助链接，告诉使用者如何填写这个apikey
      label: '关联账号', // 授权平台，告知用户填写哪个平台的信息
      tooltips: '请配置授权', // 提示，引导用户添加授权
      icon: { // 当前平台的图标
        light: '', 
        dark: ''
      }
    },
  // 定义AI 字段的入参
  formItems: [
    {
      key: 'videoMethod',
      label: t('videoMethod'),
      component: FormItemComponent.SingleSelect,
      props: {
        defaultValue: 'sora-2',
        placeholder: '请选择模型',
        options: [
          {
            key: 'sora-2',
            title: 'sora-2',
          },
          {
            key: 'sora-2-hd',
            title: 'sora-2-hd',
          },
        ]
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'videoPrompt',
      label: t('videoPrompt'),
      component: FormItemComponent.FieldSelect,
      tooltips: {
        title:  t('videoPrompt')
      },
      props: {
        mode: 'single',
        supportTypes: [FieldType.Text, FieldType.Number,FieldType.SingleSelect,FieldType.MultiSelect],
      },
      validator: {
        required: true,
      }
    },
   {
      key: 'refImage',
      label: t('refImage'),
      component: FormItemComponent.FieldSelect,
      tooltips: {
        title:  '请上传参考图片文件'
      },
      props: {
        mode: 'single',
        supportTypes: [FieldType.Attachment],
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'size',
      label: t('size'),
      component: FormItemComponent.SingleSelect,
      props: {
        defaultValue: '720x1280',
        placeholder: '请选择模型',
        options: [
          {
            key: '720x1280',
            title: '720x1280',
          },
          {
            key: '1280x720',
            title: '1280x720',
          },
        ]
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'seconds',
      label: t('seconds'),
      component: FormItemComponent.SingleSelect,
       props: {
        defaultValue: '10',
        placeholder: '请选择时长',
        options: [
          {
            key: '10',
            title: '10秒',
          },
          {
            key: '15',
            title: '15秒',
          },
        ]
      },
      validator: {
        required: true,
      }
    },
  ],
  // 定义AI 字段的返回结果类型
  resultType: {
    type: FieldType.Attachment,
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (context, formItemParams: any) => {
    const { videoMethod, videoPrompt, refImage, size, seconds } = formItemParams;
    
   

    

     /** 为方便查看日志，使用此方法替代console.log */
    function debugLog(arg: any) {
      // @ts-ignore
      console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        ...arg
      }))
    }
    try {
     const createVideoUrl = `http://token.yishangcloud.cn/v1/images/edits`;
            // 打印API调用参数信息
            // 生成随机值并保存到变量中，供后面使用
            
            // 构建请求参数，动态添加quality参数
            const inputReference = refImage && refImage.length > 0 
                ? refImage.map(item => item.tmp_url).filter(url => url) 
                : [];
            
            const requestBody: any = {
                model: videoMethod,
                "prompt": videoPrompt,
                seconds: seconds,
                size: size,
                input_reference: inputReference
            };
            
            
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            };

            
            
            const taskResp = await context.fetch(createVideoUrl, requestOptions, 'auth_id');

    
           
      debugLog(
        {'=1 视频创建接口结果':taskResp}
      )

      // 检查第一个接口是否返回了正确的id
      if (taskResp && taskResp.id) {
        // 调用第二个API获取视频详情
        const videoDetailUrl = `https://api.chatfire.cn/v1/videos/${taskResp.id}`;
        const detailRequestOptions = {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-D6FusdO3xic4BFH6QLYQBiKUbcxewqyGAwMIck4xFiPYDPuI'
          }
        };
        
        const videoDetailResp = await context.fetch(videoDetailUrl, detailRequestOptions);
        
        debugLog(
          {'=2 视频详情接口结果':videoDetailResp}
        )
        
        // 检查视频详情接口返回的status是否为failed
        if (videoDetailResp && videoDetailResp.status === 'failed') {
          return {
            code: FieldExecuteCode.Error,
            errorMessage: 'error2'
          };
        }
        
        // 从视频详情中提取视频URL
        const videoUrl = videoDetailResp && videoDetailResp.video_url ? videoDetailResp.video_url : "";
        
        return {
          code: FieldExecuteCode.Success, // 0 表示请求成功
          // data 类型需与下方 resultType 定义一致
          data: [{
            fileName: videoPrompt + '.mp4',
            type: 'video',
            url: videoUrl
          }]
        };
      } else {
        // 如果没有返回正确的id，返回错误
        return {
          code: FieldExecuteCode.Error,
          errorMessage: 'error2'
        };
      }

     
   
    } catch (e) {
      console.log('====error', String(e));
      
       if (String(e).includes('无可用渠道')) { 
        return {
          code: FieldExecuteCode.Error, 
          errorMessage: 'error1',
        };
      }

      // 检查错误消息中是否包含余额耗尽的信息
      if (String(e).includes('令牌额度已用尽')||String(e).includes('quota')) {
        
        return {
          code: FieldExecuteCode.QuotaExhausted, 
        };
      }
       if (String(e).includes('无效的令牌')) {
        
        return {
          code: FieldExecuteCode.ConfigError, 
        };
      }
       return {
          code: FieldExecuteCode.Error, 
          errorMessage: 'error1',
        };
    }
  },
});
export default fieldDecoratorKit;
