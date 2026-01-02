const AcceptDashboard = ({data}) => {
    console.log();
    
    return (
        <div className='shrink-0 h-full w-full sm:w-90 p-6 bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-between items-center mb-4'>
                <span className='bg-red-700 text-xs font-bold px-3 py-1 rounded-full text-white'>{data.category}</span>
                <span className='text-xs text-red-100'>{data.date}</span>
            </div>
            
            <h2 className='text-2xl font-bold text-white mb-2'>{data.title}</h2>
            <p className='text-sm text-red-100 mb-6 leading-relaxed'>
               {data.description}
            </p>
            
            <div className='flex flex-col sm:flex-row gap-3'>
                <button className='flex-1 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105'>
                    ✓ Mark as Completed
                </button>
                <button className='flex-1 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-sm font-semibold text-white border border-white/50 shadow-md transition-all duration-200'>
                    ✕ Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptDashboard