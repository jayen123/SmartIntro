export default function Label(props) {

    return (
        <>
            <label class="text-sm text-dgray md:text-xl" for={props.target}>{props.label}</label>
        </>
    )
}