import { mutations } from '~/store/shareholdersForm'

const { open, loadShareholders, addShareholder } = mutations

describe('Mutations', () => {
  test('Open', () => {
    const state = { isOpen: 0 }
    open(state, 1)
    expect(state.isOpen).toBe(1)
  })
  test('loadShareholders', () => {
    const state = {
      shareholders: [
        {
          title: 'Shareholder 1 (applicant)',
          currentFormStep: 0,
          generalData: {
            naturalPerson: null,
            fluent: null,
            resident: null,
            director: null
          },
          personalData: {
            salutation: '',
            firstName: '',
            surname: '',
            dateOfBirth: new Date(),
            countryOfBirth: ''
          },
          contactDetails: {
            telephoneNumber: '',
            emailAddress: '',
            postalCode: '',
            houseNumber: '',
            complement: '',
            streetName: '',
            placeName: ''
          }
        }
      ]
    }
    const loadedData = [
      {
        title: 'Shareholder 1 (applicant)',
        currentFormStep: 0,
        generalData: {
          naturalPerson: true,
          fluent: true,
          resident: false,
          director: false
        },
        personalData: {
          salutation: 'Mr.',
          firstName: 'Nicol',
          surname: 'Bolas',
          dateOfBirth: new Date('06/01/1994'),
          countryOfBirth: 'Dominaria'
        },
        contactDetails: {
          telephoneNumber: '987654321',
          emailAddress: 'realnicolbolas@wizards.com',
          postalCode: '55555',
          houseNumber: '10',
          complement: '3rd Circle',
          streetName: 'Grixs Street',
          placeName: 'Ravinica'
        }
      },
      {
        title: 'Shareholder 2',
        currentFormStep: 0,
        generalData: {
          naturalPerson: false,
          fluent: false,
          resident: true,
          director: true
        },
        personalData: {
          salutation: 'Mr.',
          firstName: 'Jon',
          surname: 'Doe',
          dateOfBirth: new Date('06/01/1975'),
          countryOfBirth: 'Brazil'
        },
        contactDetails: {
          telephoneNumber: '123456789',
          emailAddress: 'jon@doe.com',
          postalCode: '111111',
          houseNumber: '5',
          complement: '2nd Floor',
          streetName: 'Doe Street',
          placeName: 'Jonsvile'
        }
      }
    ]
    loadShareholders(state, loadedData)
    expect(state.shareholders).toBe(loadedData)
  })
  test('addShareholder', () => {
    const state = {
      shareholders: [
        {
          title: 'Shareholder 1 (applicant)',
          currentFormStep: 0,
          generalData: {
            naturalPerson: true,
            fluent: true,
            resident: false,
            director: false
          },
          personalData: {
            salutation: 'Mr.',
            firstName: 'Nicol',
            surname: 'Bolas',
            dateOfBirth: new Date('06/01/1994'),
            countryOfBirth: 'Dominaria'
          },
          contactDetails: {
            telephoneNumber: '987654321',
            emailAddress: 'realnicolbolas@wizards.com',
            postalCode: '55555',
            houseNumber: '10',
            complement: '3rd Circle',
            streetName: 'Grixs Street',
            placeName: 'Ravinica'
          }
        }
      ]
    }
    const shareholder = {
      title: 'Shareholder 2',
      currentFormStep: 0,
      generalData: {
        naturalPerson: null,
        fluent: null,
        resident: null,
        director: null
      },
      personalData: {
        salutation: '',
        firstName: '',
        surname: '',
        dateOfBirth: new Date(),
        countryOfBirth: ''
      },
      contactDetails: {
        telephoneNumber: '',
        emailAddress: '',
        postalCode: '',
        houseNumber: '',
        complement: '',
        streetName: '',
        placeName: ''
      }
    }
    addShareholder(state, shareholder)
    expect(state.shareholders).toBe([...state.shareholders, shareholder])
  })
})
