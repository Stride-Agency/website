import { TApi } from "~/types/api";
import { LinearClient } from '@linear/sdk'
import { SALES_TEAM_ID, LABEL_IDS, LabelIDKeys } from '~/constants/linear'

const mapKeysToIds = (keys: LabelIDKeys[]): string[] => {
    return keys.map((key) => LABEL_IDS[key]);
};

export default defineEventHandler<{ body: TApi<'/api/lead'>["Body"] }>(async (event) => {
    const { LINEAR_API_KEY } = useRuntimeConfig()
    const { lead } = await readBody(event)

    const linear = new LinearClient({ apiKey: LINEAR_API_KEY })

    const leadResponse = await linear.createIssue({
        teamId: SALES_TEAM_ID,
        title: `${lead.name}: New Lead [Website]`,
        description: `
**Name:** ${lead.name}
**Email:** ${lead.email}
**Message:** ${lead.message}
        `.trim(),
        labelIds: mapKeysToIds(lead.linear_label_ids),
    })

    return {
        status: 200,
        body: {
            success: true,
            data: leadResponse
        }
    }
})
