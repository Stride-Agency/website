import { NitroFetchRequest } from 'nitropack'
import type { LabelIDKeys } from '@/constants/linear'
import type { LinearFetch, IssuePayload } from '@linear/sdk'

type APIEndpoints = Extract<NitroFetchRequest, '/api/lead'>
type APIResponses = {
    '/api/lead': {
        Body: {
            lead: {
                name: string,
                email: string,
                message: string,
                linear_label_ids: LabelIDKeys[],
            }
        },
        Response: LinearFetch<IssuePayload>
    },
}
export type TApi<T extends APIEndpoints> = APIResponses[T];
