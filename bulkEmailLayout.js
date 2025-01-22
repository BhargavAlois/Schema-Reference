layout: [
      {
        type: 'section',
        title: 'User Information',
        classNames: 'd-flex flex-column',
        fields: [
          {
            type: 'section',
            classNames: 'd-flex flex-row gap-2',
            fields: ['department', 'geography', 'shiftTiming', 'selectedUser'],
          },
          'button',
          'users',
          {
            type: 'section',
            classNames: 'd-flex flex-row gap-2',
            fields: ['ccMail', 'bccMail'],
          },
          'subject',
          {
            type: 'section',
            classNames: 'd-flex flex-row gap-2',
            fields: ['date', 'time']
          },
          'message'
        ],
      }
    ],
