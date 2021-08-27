import cities from "../config/cities";

export default function FilterBox({ setFilterParam }) {
  return (
    <select
      className="form-select"
      onChange={(e) => setFilterParam(e.target.value)}
    >
      <option selected value="All">
        جميع المناطق
      </option>
      <option value="بيروت">بيروت</option>
      <optgroup label="محافظة الجنوب">
        <option value="صيدا">صيدا</option>
        <option value="صور">صور</option>
        <option value="جزين">جزين</option>
      </optgroup>
      <optgroup label="محافظة النبطية">
        <option value="النبطية">النبطية</option>
        <option value="حاصبيا">حاصبيا</option>
        <option value="مرجعيون">مرجعيون</option>
        <option value="بنت جبيل"> بنت جبيل</option>
      </optgroup>
      <optgroup label="محافظة عكار">
        <option value="عكار">عكار</option>
      </optgroup>
      <optgroup label="محافظة الشمال">
        <option value="طرابلس">طرابلس</option>
        <option value="زغرتا - الزاوية">زغرتا - الزاوية</option>
        <option value="بشري">بشري</option>
        <option value=" البترون">البترون</option>
        <option value=" الكورة">الكورة</option>
        <option value="الضنية">الضنية</option>
      </optgroup>
      <optgroup label="محافظة بعلبك الهرمل">
        <option value="الهرمل">الهرمل</option>
        <option value=" بعلبك"> بعلبك</option>
      </optgroup>
      <optgroup label="محافظة البقاع">
        <option value=" زحلة">زحلة</option>
        <option value=" البقاع الغربي">البقاع الغربي</option>
        <option value="راشيا">راشيا</option>
      </optgroup>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
}
