export const SALES_TEAM_ID = '88e3a251-1764-48c4-a4dd-889c365a0245'

export const LABEL_IDS = {
    // origins
    ORIGIN_WEBSITE_ASK_A_QUESTION: '009e979e-d7bc-4a28-a249-fd2f71fedc75'
} as const

export type LabelIDKeys = keyof typeof LABEL_IDS;
