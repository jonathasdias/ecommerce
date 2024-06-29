const SkeletonProduct: React.FC = () => {
    return (
        <div className="animate-pulse border border-blue-300 space-y-4 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="bg-slate-700 w-full h-48"></div>

            <div className="space-y-2">
                <div className="bg-slate-700 h-3 w-full rounded-full"></div>
                <div className="bg-slate-700 h-3 w-full rounded-full"></div>
            </div>

            <div className="bg-slate-700 h-2 w-[30%] rounded-full"></div>

            <div className="bg-slate-700 h-2 w-[18%] rounded-full"></div>
        </div>
    )
}
export default SkeletonProduct;