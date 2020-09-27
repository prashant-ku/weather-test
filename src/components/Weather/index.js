import React, { Fragment } from 'react'
import { TiWeatherSunny, TiWeatherPartlySunny, TiWeatherCloudy , TiWeatherDownpour, TiWeatherStormy, TiWeatherSnow, TiWeatherShower} from 'react-icons/ti'

export default ({weather}) => {

    return (
        <Fragment>
            <span>
            {weather.main==='Rain' 
            && <TiWeatherDownpour/>
            }
            {weather.main==='Clouds' && (weather.description === 'broken clouds' || weather.description ==='overcast clouds')
            && <TiWeatherCloudy/>
            }
            { weather.main === 'Clouds' && (weather.description === 'few clouds' || weather.description === 'scattered clouds')
            && <TiWeatherPartlySunny/>
            }
            { weather.main === 'Clear'
            && <TiWeatherSunny/>
            }
            { weather.main === 'Thunderstorm'
            && <TiWeatherStormy/>
            }
            { weather.main === 'Drizzle'
            && <TiWeatherShower/>
            }
            { weather.main === 'Snow'
            && <TiWeatherSnow/>
            }
            </span>
            <span> {weather.description}</span>
        </Fragment>
    )
}