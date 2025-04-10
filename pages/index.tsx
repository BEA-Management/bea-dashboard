import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

const incomeData = [
  { ay: "Ocak", gelir: 0, gider: 120000 },
  { ay: "Şubat", gelir: 0, gider: 120000 },
  { ay: "Mart", gelir: 0, gider: 120000 },
  { ay: "Nisan", gelir: 0, gider: 120000 },
  { ay: "Mayıs", gelir: 0, gider: 120000 },
  { ay: "Haziran", gelir: 0, gider: 120000 },
  { ay: "Temmuz", gelir: 100000, gider: 120000 },
  { ay: "Ağustos", gelir: 0, gider: 120000 },
  { ay: "Eylül", gelir: 0, gider: 120000 },
  { ay: "Ekim", gelir: 0, gider: 120000 },
  { ay: "Kasım", gelir: 0, gider: 120000 },
  { ay: "Aralık", gelir: 0, gider: 120000 },
];

const reminders = [
  { id: 1, tarih: "2025-05-01", baslik: "FloraPark Teslim Tarihi", tur: "Proje" },
  { id: 2, tarih: "2025-06-15", baslik: "Villa Zarik İç Mimari Teslim", tur: "Proje" },
  { id: 3, tarih: "2025-10-10", baslik: "Villa Zarik Renovasyon Teslim", tur: "Proje" },
  { id: 4, tarih: "2025-04-15", baslik: "Nisan KDV Ödeme Günü", tur: "Finans" },
  { id: 5, tarih: "2025-04-30", baslik: "Maaş Ödemesi", tur: "Personel" },
];

// Aynı employee ve projects listesi korunuyor...

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {/* Finansal Durum */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Finansal Durum</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={incomeData}>
              <XAxis dataKey="ay" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="gelir" name="Gelir" fill="#4ade80" />
              <Bar dataKey="gider" name="Gider" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Takvim */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Takvim</h2>
          <Calendar mode="single" className="rounded-md border shadow" />
        </CardContent>
      </Card>

      {/* Hatırlatıcılar */}
      <Card className="col-span-1 lg:col-span-2">
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><Bell className="w-5 h-5" />Hatırlatıcılar</h2>
          {reminders.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <div>
                <p className="font-medium">{item.baslik}</p>
                <p className="text-sm text-muted-foreground">{item.tarih}</p>
              </div>
              <Badge>{item.tur}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
