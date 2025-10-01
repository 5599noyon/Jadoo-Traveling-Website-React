import React, { useState } from 'react';
import { Car, Coffee, MapPin, Clock, Users } from 'lucide-react';
import DesitnationMap from '../ComponentPages/DesitnationMap';

const DestinationsPage = () => {
  const [activeTab, setActiveTab] = useState('Europe');

  const tabs = [
    'Europe', 'North_America', 'Asia', 'Africa', 'Middle_East', 'South_America'
  ];

  const destinations = {
    Europe: [
      {
        name: 'London',
        things: '3889 things to do',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
      },
      {
        name: 'Istanbul',
        things: '2737 things to do',
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=300&fit=crop'
      },
      {
        name: 'Paris',
        things: '3880 things to do',
        image: 'https://happywall-img-gallery.imgix.net/56254/west_paris_limited.jpg?auto=format&w=400&h=300&fit=crop&crop=top&q=30 '
      },
      {
        name: 'Hamburg',
        things: '365 things to do',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
      },
      {
        name: 'Amsterdam',
        things: '1095 things to do',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop'
      },
      {
        name: 'Lisbon',
        things: '3828 things to do',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=300&fit=crop'
      },
      {
        name: 'Rome',
        things: '6778 things to do',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop'
      },
      {
        name: 'Athens',
        things: '3349 things to do',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&h=300&fit=crop'
      }
    ],

    North_America: [
      {
        name: 'Empire State Building',
        things: '3889 things to do',
        image: 'https://assets.simpleviewinc.com/simpleview/image/upload/q_75/v1/crm/newyorkstate/GettyImages-486334510_CC36FC20-0DCE-7408-77C72CD93ED4A476-cc36f9e70fc9b45_cc36fc73-07dd-b6b3-09b619cd4694393e.jpg'
      },
      {
        name: 'Xcaret Park',
        things: '2737 things to do',
        image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/kcjfmuipclyxittjvjva/Xcaret%20Natural%20Water%20Park%20Admission%20in%20Playa%20del%20Carmen.jpg'
      },
      {
        name: 'Statue of Liberty',
        things: '3880 things to do',
        image: ' https://media.nomadicmatt.com/2023/ellistour1.jpeg '
      },
      {
        name: 'Smoky Mountains',
        things: '365 things to do',
        image: 'https://www.visitmysmokies.com/media/67dd51aff1a2be90810fa16e/original.webp'
      },
      {
        name: 'Disney World®',
        things: '1095 things to do',
        image: 'https://gardenandgun.com/wp-content/uploads/2024/02/AdobeStock_560429194_Editorial_Use_Only.jpeg'
      },
      {
        name: 'Greenland',
        things: '3828 things to do',
        image: 'https://images.squarespace-cdn.com/content/v1/65561afa35d5f77eea3c4a41/2ef7c4c6-3c52-4afb-89bd-8362b64fac90/IMG_2027.jpg '
      },
      {
        name: 'Niagara Falls',
        things: '6778 things to do',
        image: ' https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/kryptonist-Instagram-2829-ig-17924041106591374-1-_D7B0197C-B1E6-E631-46E255AA1AC51751-d7b01765a3f583c_d7b01bcc-bcda-1dcb-00749d125dd0f84f.jpg'
      },
      {
        name: 'San Diego',
        things: '3349 things to do',
        image: 'https://rpmliving.com/wp-content/uploads/2024/10/San-Diego-2.jpg'
      }
    ],

    Asia: [
      {
        name: 'Bangladesh ',
        things: '3889 things to do',
        image: 'https://amarhaor.com/uploads/images/805b015deaf7c5448b86de1f09100343.jpeg'
      },
      {
        name: 'India',
        things: '2737 things to do',
        image: 'https://treasuretripin.com/wp-content/uploads/2023/12/SECRETS-TO-EXPERIENCE-IN-TAJ-MAHAL.png'
      },
      {
        name: 'Napal',
        things: '3880 things to do',
        image: 'https://media.istockphoto.com/id/1157975615/photo/mountains-peaks-with-stream-in-himalayas-napal.jpg?s=612x612&w=0&k=20&c=MG5vjmp1lX_L4ZkCTacjlRS4_wxBFU3_d4da64wON0M= '
      },
      {
        name: 'Singapore',
        things: '365 things to do',
        image: 'https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_3x2.jpg'
      },
      {
        name: 'Indonesia',
        things: '1095 things to do',
        image: 'https://wttc.org/getContentAsset/dcfb07d8-5ced-4c13-889c-ad4483d8c158/489c4c4e-cfe8-42ba-91b1-27fe878007dd/Bali,-Indonesia.webp?language=en'
      },
      {
        name: 'Japan',
        things: '3828 things to do',
        image: 'https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg'
      },
      {
        name: 'Thailand',
        things: '6778 things to do',
        image: 'https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg'
      },
      {
        name: 'Singapore',
        things: '3349 things to do',
        image: 'https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_3x2.jpg'
      }
    ],

    Africa: [
      {
        name: 'Egypt ',
        things: '3889 things to do',
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR60lh2K25V0JxO0w3-rz7Q_NKhldfuuuc5Q965ojEB6T9dxB-9mZfEciLyudpqb27PjaPHk4tIcujq9y61KOiwS2R6PwSltCdjLg-S1Q'
      },
      {
        name: 'Chad',
        things: '2737 things to do',
        image: 'https://govolunteerafrica.org/wp-content/uploads/2019/10/Zakouma-National-Park.jpg'
      },
      {
        name: 'Cabo Verde',
        things: '3880 things to do',
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTuP6LL2hWF03hrGfVnEWsjO4NRXIxz1neSlToyMdVbs2gyNyjR7uM0j0AMYrVm7wPrDjgbFNfTLTQn-bQvruw8S2nuCeyrMv2h_67ddg '
      },
      {
        name: 'Cameroon',
        things: '365 things to do',
        image: 'https://www.gokitetours.com/wp-content/uploads/2024/07/The-famous-Tourist-places-in-Cameroon-.webp'
      },
      {
        name: 'Burundi',
        things: '1095 things to do',
        image: 'https://albertinetours.com/wp-content/uploads/2023/02/Waterfall-exploration.jpg'
      },
      {
        name: 'Botswana',
        things: '3828 things to do',
        image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQBxL-Yu7iT8Xqrs1ZjSuZVlcz-YORpG-e8C4Aq-Fils5wpuuKMc8m-HsH1fIWyNae4smTyAH_yuew-HSiVZQIwHggULK01kLZ9rHqvwA'
      },
      {
        name: 'Angola',
        things: '6778 things to do',
        image: 'https://content.r9cdn.net/rimg/dimg/77/75/979caaae-city-103496-173af635417.jpg?width=1366&height=768&xhint=2202&yhint=1393&crop=true'
      },
      {
        name: 'Algeria',
        things: '3349 things to do',
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQYWT0s6OmxnRXQpzlkZpAnLMymvnnFsFxMR-fAv-qBpuMQslmnX0VUGVjdW_4pEbzNaFN_K1tXe2m59m0cSP3pgmBgEYS5BznOYp0sgEE'
      }
    ],

    Middle_East: [
      {
        name: 'Iran',
        things: '3889 things to do',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqzO9Sf5955q0jJTX2w0CfPKWqOLHH9Wb17NMmVp1kjK-VnAztSeWZNm-KxCHx3ZY75a6srzwklKtt5DSv9fcHNnZi1jKzso_767hECIonVOaml4ObR6DDAAyTcL8PjwLIMP0Mt=w540-h312-n-k-no'
      },
      {
        name: 'United Arab Emirates',
        things: '2737 things to do',
        image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQmGNvL4YYjLAKAD2m5M1mDtp-qn8lAhC1QLdok3twNSPynarYHvA36rK6IzXc2xCH_C-f43ZC0vmm34hR-Xqn5eAGZc7j8AfQ6xTth5g'
      },
      {
        name: 'Saudi Arabia',
        things: '3880 things to do',
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTjDS4egvQjouuG13RhpPuwaBa0UM-DcYLzCWFxUG2ySW1QqT-GYvhdGWVZhOsgnFRd6GOLubob3rUuPIBiZz9_ULEmSsFHe8r_rZdWQAc '
      },
      {
        name: 'Jordan',
        things: '365 things to do',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noAG6wUxtJM4K4MXIuH1iDqsU181h6nVyuV2w6ybki0ImRu-2ohjJxgyilsg-MYp3kFdjLK2veKxHXAcbuL0falc9eW18ItXaRRlbraFvllzLUaGPoUNV-C2hpUGcDUaPOxPU6W=w540-h312-n-k-no'
      },
      {
        name: 'Kuwait',
        things: '1095 things to do',
        image: 'https://www.investmentmonitor.ai/wp-content/uploads/sites/7/2023/09/shutterstock_1304169382.jpg'
      },
      {
        name: 'Oman',
        things: '3828 things to do',
        image: 'https://countrysideindia.com/wp-content/uploads/2017/02/2.jpg'
      },
      {
        name: 'Qatar',
        things: '6778 things to do',
        image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRmZ3V-5kQ_JG4Vc9thER7Qz1RueGec1V5bTMQAXLDOD5dj_Fza3UdpSjrp1zH9XKKzWGm15-H_J9ktlz-0rxuDjMzVd3i4pwZNHa33gg'
      },
      {
        name: 'Bahrain',
        things: '3349 things to do',
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQkfts48KmH0Tb1YHTs0lrKqYBp3gem8GYlnDHeQos4obp0OY5bkEUftcD-6-3FLfbpUq7MHSoi-8_KJ0-0mV5OVfqF7HZop3bft4qPYw'
      }
    ],

    South_America: [
      {
        name: 'Castle of Good Hope',
        things: '3889 things to do',
        image: 'https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HahTGte6L-d2PgQmPkNQp4WaNKoIdPiaa2iHre0CjjucDBtCwhjaZn0cVJyFNv_e4fcjSs7hNHGrPMwnwdNRYqmMtfuM_KrJD4j1qjAyyO38cCszc6IoiQXe8r9uunpXRYy2c3CqQ=s294-w294-h220-n-k-no'
      },
      {
        name: 'Montecasino',
        things: '2737 things to do',
        image: 'https://lh3.googleusercontent.com/p/AF1QipM6v9xTKDSheakNeZTJmFS_rjXkqRjV4wY_DNvD=s294-w294-h220-n-k-no'
      },
      {
        name: 'Cape Town',
        things: '3880 things to do',
        image: 'https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HYvm-2RrLJ2sNhTc3lwwQSkE_bQ384C3mIFbxB3f6kAFnusGhCO7Xmn7kAUXUjfc4Iy0MNX48fO132TWWToRVNWkLM7RZusBEwJDyQu8eEkocKrujgGYK_QH-k-lLMU_gkmvK5U=s220-w165-h220-n-k-no '
      },
      {
        name: 'V&A Waterfront',
        things: '365 things to do',
        image: 'https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HbZtHwv6PsWsHSXF2hWsEo9v_t8aLbY0od0D-xctU477qH8eTNJ9fuPqJEYi_K12CyENz0jBIwbT2oxAQsXe3-_zhdgayZJaQF2xIrc4VdfJ9bkUc_IWe07cPeOq_0WLqbiZ8Rb=s294-w294-h220-n-k-no'
      },
      {
        name: 'Kruger National Park',
        things: '1095 things to do',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqA_pJxgoxqiICCZUMUjZUm6TNYvkmOQKzOXcT1QyKvyrjngRl2xxlCx2TRlR0ugp-6k_U25jCEAlxKAsZljtkeSyuOXWRPkgF8TZlqAbRIsLAh2v-fgtIZyrTbpXPopRTLjYeN=s294-w294-h220-n-k-no'
      },
      {
        name: 'God’s Window',
        things: '3828 things to do',
        image: 'https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HYhvkj1En7kp1uzMHqm5mx1qpQutHK8BDvficX_B1Hb9Oy-mzN7Zs-3c3I5Q9G1Jabroj3fxpEWKV6htbI0cngaszrR9aQqe0BRE_6CL_a_Sn_Mnzn9wpfyaTJ19yY6SX4U8w43=s294-w294-h220-n-k-no'
      },
      {
        name: 'Two Oceans Aquarium',
        things: '6778 things to do',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nro5AUnJZzjcblWdB0pVuI88GS-0Rg45aHPfujLEXT8uicJfx9Q0HJdsXZycGDlGIIG6jREH5kcJjl2Y1pGSA39_-Qzn-QQ5697OOoFi3vVzYANjZVlOoDBpfxxzTTDyZMn5N7dBg=s680-w680-h510-rw'
      },
      {
        name: 'Constitution Hill Human Rights Precinct',
        things: '3349 things to do',
        image: 'https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HafYhhfoljwK9uUb24dtxx06Y0wOvOjcz_mSWDuMpzSNZ12W9yYkJGBKJAGm5x2gmtDavH11hYQh1aAFDRKF40UiZ-zMJ7qwnVDRE7kKX8CT29XpWtQgO5Hj8687GAO-yiTrVnxDg=s294-w294-h220-n-k-no'
      }
    ]

  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 md:pt-[150px] ">
      <div>
        <DesitnationMap/>
      </div>
      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Upgrade Banner */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">You got a temporary upgrade</h1>
              <a href="#" className="text-blue-600 text-sm hover:underline">Learn more about your rewards</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Genius Card */}
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Genius</h3>
                <p className="text-sm mb-1">User, you've been upgraded to</p>
                <p className="text-sm">Level 2 until Oct 2 2025</p>
              </div>

              {/* Benefits Cards */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="font-semibold">10-15% discounts on stays</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Enjoy discounts at participating properties worldwide</p>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">New</span>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Car className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="font-semibold">10-15% discounts on rental cars</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Save on select rental cars</p>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">New</span>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Coffee className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="font-semibold">Free breakfasts</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Start your day with free breakfast at select options</p>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">New</span>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">We've got you covered</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Explore top attractions</h3>
                  <p className="text-gray-600 text-sm">Experience the best of your destination with attractions, tours, activities, and more</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Fast and flexible</h3>
                  <p className="text-gray-600 text-sm">Book tickets online in minutes, with free cancellation on many attractions</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Support when you need it</h3>
                  <p className="text-gray-600 text-sm">Booking.com's global Customer Service team is here to help 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Explore more destinations</h2>
          <p className="text-gray-600">Find things to do in cities around the world</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations[activeTab]?.map((destination, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="aspect-[4/3] bg-gray-200">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-sm text-gray-200">{destination.things}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;