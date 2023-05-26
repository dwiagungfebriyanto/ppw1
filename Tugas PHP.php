<!-- Tugas nomor 1 -->
<?php
    $name = str_word_count("Agung");
    $date = date("d") - 2;
    if ($name == $date) {
        echo "Berhasil";
    } else if ($name < $date) {
        echo "Sedikit lagi";
    } else {
        echo "Coba lagi";
    }
    echo "<br><br>";
?>

<!-- Tugas nomor 2 -->
<?php
    $members = array("Agung"=>"1", "Langit"=>"2", "Erge"=>"3", "Sena"=>"4", "Yanto"=>"5");
    foreach ($members as $name => $nim) {
        if ($nim % 2 == 0) {
            echo $name . " berperan sebagai back-end developer.<br>";
        } else {
            echo $name . " berperan sebagai front-end developer.<br>";   
        }
    }
    echo "<br>";
?>

<!-- Tugas nomor 3 -->
<?php
    $nama_depan = array('d', 'w', 'i');
    $kota = array("Lampung", "Riau", "Jambi", "Bengkulu", "Makasar", "Kendari", "Gorontalo", "Samarinda", "Papua", "Nusa Tenggara Barat");
    
    $kota_kkn = "Jawa Timur";
    foreach ($nama_depan as $i) {
        foreach ($kota as $j) {
            if ($i == substr(strtolower($j), 0, 1)) {
                $kota_kkn = $j;
            }
        }
        if ($kota_kkn != "Jawa Timur") {
            break;
        }
    }

    echo "Kota KKN: " . $kota_kkn;
?>