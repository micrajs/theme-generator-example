exports.lightTheme = {
  body: {
    backgroundColor: ({ theme }) => theme('color.gray.100'),
  },
  text: {
    fontFamily: ({ theme }) => theme('fontFamily.sans'),
    fontSize: ({ theme }) => theme('fontSize.base'),
    fontWeight: ({ theme }) => theme('fontWeight.normal'),
    lineHeight: ({ theme }) => theme('lineHeight.normal'),
  },
  heading: {
    1: {
      fontFamily: ({ theme }) => theme('fontFamily.serif'),
      fontWeight: ({ theme }) => theme('fontWeight.normal'),
      fontSize: ({ theme }) => theme('fontSize.5xl'),
      lineHeight: ({ theme }) => theme('lineHeight.tight'),
    },
    2: {
      fontFamily: ({ theme }) => theme('fontFamily.serif'),
      fontWeight: ({ theme }) => theme('fontWeight.normal'),
      fontSize: ({ theme }) => theme('fontSize.4xl'),
      lineHeight: ({ theme }) => theme('lineHeight.snug'),
    },
    3: {
      fontFamily: ({ theme }) => theme('fontFamily.serif'),
      fontWeight: ({ theme }) => theme('fontWeight.normal'),
      fontSize: ({ theme }) => theme('fontSize.2xl'),
      lineHeight: ({ theme }) => theme('lineHeight.normal'),
    },
    4: {
      fontFamily: ({ theme }) => theme('fontFamily.serif'),
      fontWeight: ({ theme }) => theme('fontWeight.normal'),
      fontSize: ({ theme }) => theme('fontSize.xl'),
      lineHeight: ({ theme }) => theme('lineHeight.tight'),
    },
    5: {
      fontFamily: ({ theme }) => theme('fontFamily.serif'),
      fontWeight: ({ theme }) => theme('fontWeight.normal'),
      fontSize: ({ theme }) => theme('fontSize.base'),
      lineHeight: ({ theme }) => theme('lineHeight.tight'),
    },
    6: {
      fontFamily: ({ theme }) => theme('fontFamily.serif'),
      fontWeight: ({ theme }) => theme('fontWeight.normal'),
      fontSize: ({ theme }) => theme('fontSize.sm'),
      lineHeight: ({ theme }) => theme('lineHeight.tight'),
    },
  },
  button: {
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme('color.transparent'),
    borderWidth: ({ theme }) => theme('spacing.px'),
    padding: ({ theme }) => `${theme('spacing.2')} ${theme('spacing.4')}`,
    fontSize: ({ theme }) => theme('fontSize.base'),
    fontFamily: ({ theme }) => theme('fontFamily.sans'),
    fontWeight: ({ theme }) => theme('fontWeight.medium'),
    lineHeight: ({ theme }) => theme('lineHeight.tight'),
    borderRadius: ({ theme }) => theme('borderRadius.base'),
    round: {
      borderRadius: ({ theme }) => theme('borderRadius.round'),
    },
    sizes: {
      md: {
        height: ({ theme }) => theme('spacing.12'),
      },
    },
    icon: {
      md: {
        width: ({ theme }) => theme('spacing.12'),
      },
    },
    variant: {
      primary: {
        backgroundColor: ({ theme }) => theme('color.primary.500'),
        borderColor: ({ theme }) => theme('color.primary.500'),
        color: ({ theme }) => theme('color.white'),
        focus: {
          backgroundColor: ({ theme }) => theme('color.primary.600'),
          borderColor: ({ theme }) => theme('color.primary.900'),
          color: ({ theme }) => theme('color.white'),
        },
        hover: {
          backgroundColor: ({ theme }) => theme('color.primary.400'),
          borderColor: ({ theme }) => theme('color.primary.400'),
          color: ({ theme }) => theme('color.white'),
        },
      },
      secondary: {
        backgroundColor: ({ theme }) => theme('color.transparent'),
        borderColor: ({ theme }) => theme('color.gray.400'),
        color: ({ theme }) => theme('color.black'),
        focus: {
          backgroundColor: ({ theme }) => theme('color.gray.300'),
          borderColor: ({ theme }) => theme('color.gray.400'),
          color: ({ theme }) => theme('color.black'),
        },
        hover: {
          backgroundColor: ({ theme }) => theme('color.gray.200'),
          borderColor: ({ theme }) => theme('color.gray.400'),
          color: ({ theme }) => theme('color.black'),
        },
      },
    },
  },
};
