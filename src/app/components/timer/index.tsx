import * as React from "react";
import * as moment from "moment";
import { DAY, MINUT, S } from "src/app/consts";
import { declensions } from "src/app/functions/";

export const Timer: React.FC = () => {
  const NEW_YEAR = React.useMemo(() => moment("01/01/2020"), []);
  const [now, setNow] = React.useState(moment());
  const [time, setTime] = React.useState<[number, number, number, number]>([
    0,
    0,
    0,
    0
  ]);
  const [isNewYear, setIsNewYear] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setNow(moment());
      const NOW = moment();
      const d = NEW_YEAR.diff(NOW, "days");
      const h = NEW_YEAR.diff(NOW, "hours") - d * DAY;
      const m = NEW_YEAR.diff(NOW, "minutes") - d * DAY * MINUT - h * MINUT;
      const s =
        NEW_YEAR.diff(NOW, "seconds") - NEW_YEAR.diff(NOW, "minutes") * 60;
      setTime([d, h, m, s]);
      if (NEW_YEAR.diff(NOW, "seconds") < 0) {
        setIsNewYear(true);
      }
    }, S);
  }, [NEW_YEAR]);

  return (
    <div className="left-days">
      {time[0]} {declensions(time[0], "день", "дня", "дней")}, {time[1]}{" "}
      {declensions(time[1], "час", "часа", "часов")}, {time[2]}{" "}
      {declensions(time[2], "минута", "минуты", "минут")}, {time[3]}{" "}
      {declensions(time[3], "секунда", "секунды", "секунд")}
    </div>
  );
};
