import Link from 'next/link';

export default function NewsCard({ article }: any) {
  const date = new Date(article.publishedAt).toLocaleString('en-US', {
    timeZone: 'Asia/kolkata',
  });

  return (
    <>
      <section>
        {/* card */}
        <Link href={article.url} target='_blank'>
          <div className='mt-4 min-h-[400] w-[360px] rounded bg-white overflow-hidden shadow-[0_0_4px] shadow-[#bbd0e2] hover:shadow-[1px_1px_8px] hover:shadow-[#d4ecff] hover:bg-[#f9fdff] transition-all duration-300 ease-in-out hover:-translate-y-1'>
            {/* card header  */}
            <div>
              <img
                className='bg-gray-400 w-full h-[180px] object-cover cursor-pointer'
                src={article.urlToImage}
                alt='news image'
              />
            </div>
            {/* card content  */}
            <div className='p-3'>
              <h3 className='text-2xl'>{article.title}</h3>
              <h6 className='text-sm my-3 mr-3'>
                {article.source.name}. {date}
              </h6>
              <p>{article.content}</p>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
