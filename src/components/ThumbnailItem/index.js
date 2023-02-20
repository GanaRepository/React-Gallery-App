import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbNailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onThumbnailClick = () => {
    setActiveThumbNailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button className="button" type="button" onClick={onThumbnailClick}>
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
