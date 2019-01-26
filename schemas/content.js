import linkIcon from 'react-icons/lib/fa/paperclip'

export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'link',
            fields: [
              {
                name: 'url',
                type: 'url'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            blockEditor: {
              icon: linkIcon
            },
            fields: [
              {
                name: 'tooltip',
                type: 'string'
              }
            ]
          }
        ]
      }
    },
    {
        type: 'plans'
    }
  ]
}