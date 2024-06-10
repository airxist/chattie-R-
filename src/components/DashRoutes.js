import dashLinks from '../utils/dashboardLinks'
import Icon from './Icon'

const DashRoutes = ({media}) => {
  return (
    <ul className="dash-routes m-0">
      {
        dashLinks.map(link => {
            return <Icon
                key={link.id}
                {...link}
                smMedia={media}
            />
        })
      }
    </ul>
  )
}

export default DashRoutes
