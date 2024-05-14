export default function DangerAlert (props:any) {
    return (
        <div
        className="relative block w-full p-4 mb-4 text-base leading-5 text-white bg-red-500 rounded-lg opacity-100 font-regular">
            {props.children}
      </div>
    )
}
