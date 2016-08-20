<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>

<main id="main">
    <section class="container">
        <table>
             <thead>
                <tr>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="/" target="_blank">Home</a></td>
                </tr>
                <tr>
                    <td><a href="/grid/" target="_blank">Grid</a></td>
                </tr>
                <tr>
                    <td><a href="/material-design/" target="_blank">Material Design</a></td>
                </tr>
                <tr>
                    <td><a href="/standard/" target="_blank">Standard</a></td>
                </tr>
            </tbody>
        </table>
    </section>
</main>

<?php include('footer.php'); ?>
