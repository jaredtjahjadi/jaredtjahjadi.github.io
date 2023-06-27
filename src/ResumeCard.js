export default function ResumeCard({name, date, addl_text, listItem1, listItem2, listItem3}) {
    return (
        <div className="resume-card">
            <p className="name">{name}</p>
            <p className="date">{date}</p>
            {addl_text}
            <ul>
                {listItem1 ? <li>{listItem1}</li> : null }
                {listItem2 ? <li>{listItem2}</li> : null }
                {listItem3 ? <li>{listItem3}</li> : null }
            </ul>
        </div>
    )
}