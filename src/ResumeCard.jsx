/* eslint-disable react/prop-types */

export default function ResumeCard({name, date, addl_text, courseworkTitle, courseworkContent, listItem1, listItem2, listItem3}) {
    return (
        <div className="resume-card">
            <div className="name-date">
                <p className="name">{name}</p>
                <p className="date">{date}</p>
                <div className='addl-txt'>{addl_text ? addl_text : null}</div>
                <div className="coursework-title">{courseworkTitle ? courseworkTitle : null}</div>
                <div className="coursework-content">{courseworkContent ? courseworkContent : null}</div>
            </div>
            {listItem1 ? <ul>
                {listItem1 ? <li>{listItem1}</li> : null }
                {listItem2 ? <li>{listItem2}</li> : null }
                {listItem3 ? <li>{listItem3}</li> : null }
            </ul> : null}
        </div>
    )
}