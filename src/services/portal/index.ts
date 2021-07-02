import { scenarios } from './test-scenarios'

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const mockApiCall = async <T>(data: T): Promise<T> => {
  return Promise.resolve(data)
}

export type HouseServiceName =
  | 'Gas'
  | 'Electricity'
  | 'Water'
  | 'TV Licence'
  | 'Broadband'
  | 'Telephone Line'

export interface HouseService {
  endDate: string | null
  name: HouseServiceName
  serviceId: number
  startDate: string | null
}

export interface HouseServicesResponse {
  services: HouseService[]
}

const houseServices = async (
  scenario: number
): Promise<HouseServicesResponse> => {
  await sleep(800)
  return mockApiCall(scenarios[scenario])
}

export const PortalService = {
  houseServices,
}
