import { useTranslation } from "react-i18next"



const ListTitle = () => {

    const {t} = useTranslation()

    const list = [
        {
            title: t("ListTitle.Full Name"),
            value: t("ListTitle.Grigor Abrahamyan")
        },
        {
            title: t("ListTitle.Age"),
            value: t("ListTitle.27 Years")
        },
        {
            title: t("ListTitle.Phone No"),
            value: "+374 93 33 43 95"
        },
        {
            title: t("ListTitle.Email"),
            value: "abrahamyan051996@gmail.com"
        },
        {
            title: t("ListTitle.Address"),
            value: t("ListTitle.Yerevan Armenia")
        },

    ]
    return (
        list.map(({ title, value },index) => {
            return (
                <li key={index}>
                    <span className='title'>
                        {title}
                        <b>:</b>
                    </span>
                    <span className='titleInfo '>{value}</span>
                </li>
            )
        })
    )
}

export default ListTitle;