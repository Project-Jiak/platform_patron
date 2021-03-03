import React from 'react'

/**
 * 
 * @param {string} image
 * @param {func} onClick
 * @param {string} title
 * @param {string} classname optional
 * @param {string} line1 optional
 * @param {string} line2 optional
 * @param {string} line3 optional
 * @param {string} l1Class classname optional
 * @param {string} l2Class classname optional
 * @param {string} l3Class classname optional
 */

const cardCss = {
  margin: "1em",
}

const HCard = (props) => {
  return (
    <div
      className={`card flex-row flex-wrap m-3 ${props.classname}`}
      onClick={props.onClick}
    >
      {
        props.image != null ? (
          <div className="card-header border-0">
            <img
              alt=""
              style={{
                height: "6em",
                width: "6em",
                backgroundRepeat: "no-repeat",
                backgroundSize: "6em 6em",
                backgroundImage: `url(${props.image}), url(https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg)`
              }}
            />
          </div>
        ) : <></>
      }
      <div className="card-block text-start text-truncate p-3">
        <div className="card-title em-15">{props.title}</div>
        <div className={`card-text ${props.l1Class ? props.l1Class : ""}`}>{props.line1}</div>
        <div className={`card-text ${props.l2Class ? props.l2Class : ""}`}>{props.line2}</div>
        <div className={`card-text ${props.l3Class ? props.l3Class : ""}`}>{props.line3}</div>
      </div>
      <div className="w-100"></div>
      {/* <div className="card-footer w-100 text-muted">FOOTER</div> */}
    </div>
  )
}

export default HCard
