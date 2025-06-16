
export default function GalleryCard() {
  const item = {
    "galContentId": "1687537",
    "galContentTypeId": "17",
    "galTitle": "2012_비보이 R16 Korea",
    "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/37/1687537.jpg",
    "galCreatedtime": "20120807100157",
    "galModifiedtime": "20150702152631",
    "galPhotographyMonth": "201206",
    "galPhotographyLocation": "서울 올림픽공원 올림픽홀",
    "galPhotographer": "한국관광공사 이범수",
    "galSearchKeyword": "비보이, B-Boy, R16 Korea 2012, 댄스, 춤, 공연, 브레이크댄스"
  }
  let sptags = item.galSearchKeyword.includes(',') ? item.galSearchKeyword.split(',')
                                                     : [item.galSearchKeyword];
  sptags = sptags.map(kw => <span className="inline-block bg-gray-200
                                            rounded-full px-3 py-1
                                            text-sm font-semibold
                                            text-gray-700 mr-2 mb-2"
                                  key = {kw}>{kw}</span>)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="h-48 w-full"
           src={item.galWebImageUrl.includes('http:')
                    ? item.galWebImageUrl.replace('http:', 'https:')
                    : item.galWebImageUrl}
           alt = {item.galTitle} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {item.galTitle}
        </div>
        <div className="text-gray-700">
          {item.galPhotographyLocation}
        </div>
      </div>
      <div clssName="px-6 pt-4 pb-2">
        {sptags}
      </div>
    </div>
  )
}
