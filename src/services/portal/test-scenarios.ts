import { HouseServicesResponse } from '.'

const twoEach: HouseServicesResponse = {
  services: [
    {
      endDate: null,
      name: 'Electricity',
      serviceId: 16,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'Gas',
      serviceId: 15,
      startDate: '2018-11-01',
    },
    {
      endDate: null,
      name: 'Telephone Line',
      serviceId: 3,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Broadband',
      serviceId: 4,
      startDate: null,
    },
  ],
}

const allActive: HouseServicesResponse = {
  services: [
    {
      endDate: null,
      name: 'Electricity',
      serviceId: 16,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'Gas',
      serviceId: 15,
      startDate: '2018-11-01',
    },
    {
      endDate: null,
      name: 'Telephone Line',
      serviceId: 3,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'Broadband',
      serviceId: 4,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'TV Licence',
      serviceId: 6,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'Water',
      serviceId: 7,
      startDate: '2018-10-27',
    },
  ],
}

const allNotActive: HouseServicesResponse = {
  services: [
    {
      endDate: null,
      name: 'Electricity',
      serviceId: 16,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Gas',
      serviceId: 15,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Telephone Line',
      serviceId: 3,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Broadband',
      serviceId: 4,
      startDate: null,
    },
    {
      endDate: null,
      name: 'TV Licence',
      serviceId: 6,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Water',
      serviceId: 7,
      startDate: null,
    },
  ],
}

const evenSplit: HouseServicesResponse = {
  services: [
    {
      endDate: null,
      name: 'Electricity',
      serviceId: 16,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'Gas',
      serviceId: 15,
      startDate: '2018-11-01',
    },
    {
      endDate: null,
      name: 'Telephone Line',
      serviceId: 3,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'Broadband',
      serviceId: 4,
      startDate: null,
    },
    {
      endDate: null,
      name: 'TV Licence',
      serviceId: 6,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Water',
      serviceId: 7,
      startDate: null,
    },
  ],
}

const oneActive: HouseServicesResponse = {
  services: [
    {
      endDate: null,
      name: 'Electricity',
      serviceId: 16,
      startDate: '2018-10-27',
    },
  ],
}

const oneNotActive: HouseServicesResponse = {
  services: [
    {
      endDate: null,
      name: 'Electricity',
      serviceId: 16,
      startDate: '2018-10-27',
    },
  ],
}

const fourNotActive: HouseServicesResponse = {
  services: [
    {
      endDate: null,
      name: 'Electricity',
      serviceId: 16,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'Gas',
      serviceId: 15,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Telephone Line',
      serviceId: 3,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'Broadband',
      serviceId: 4,
      startDate: null,
    },
    {
      endDate: null,
      name: 'TV Licence',
      serviceId: 6,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Water',
      serviceId: 7,
      startDate: null,
    },
  ],
}

const fiveNotActive: HouseServicesResponse = {
  services: [
    {
      endDate: null,
      name: 'Electricity',
      serviceId: 16,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Gas',
      serviceId: 15,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Telephone Line',
      serviceId: 3,
      startDate: '2018-10-27',
    },
    {
      endDate: null,
      name: 'Broadband',
      serviceId: 4,
      startDate: null,
    },
    {
      endDate: null,
      name: 'TV Licence',
      serviceId: 6,
      startDate: null,
    },
    {
      endDate: null,
      name: 'Water',
      serviceId: 7,
      startDate: null,
    },
  ],
}

export const scenarios: Record<number, HouseServicesResponse> = {
  1: twoEach,
  2: allActive,
  3: allNotActive,
  4: evenSplit,
  5: oneActive,
  6: oneNotActive,
  7: fourNotActive,
  8: fiveNotActive,
}
