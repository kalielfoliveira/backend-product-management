import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertProduct1750015695129 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.query(`
             INSERT INTO products (id, name, description, price, favorite, bought) 
             VALUES 
             ('productsm856pnjw6sa28b8h6', 'Livro de ANGULAR', 'Livro sobre aprendizado de código do Framework ANGULAR', 50, true, false)
            ,('m856pnjxcx8ivsfwt', 'Mouse Razer', 'Mouse gamer com RGB e 16000 DPI', 250, false, false)
            ,('m856pnjxcx8ivsfwt2', 'Teclado Mecânico XPG', 'Teclado mecânico com iluminação RGB e switches mecânicos', 900, false, false)
            ,('m856pnjxcx8ivsfwt3', 'Monitor 4K LG', 'Monitor 4K com taxa de atualização de 144Hz', 2000, false, false)
            ,('m856pnjxcx8ivsfwt4', 'Cadeira Gamer DXRacer', 'Cadeira gamer ergonômica com apoio para os pés', 1500, false, false)
            ,('m856pnjxcx8ivsfwt5', 'Fone de Ouvido Bluetooth Sony', 'Fone de ouvido Bluetooth com cancelamento de ruído', 800, false, false)
            ,('m856pnjxcx8ivsfwt6', 'Webcam Logitech', 'Webcam Full HD com microfone embutido', 300, false, false)
            ,('m856pnjxcx8ivsfwt7', 'SSD Samsung 970 EVO', 'SSD NVMe de 1TB para alta performance', 600, false, false)
            ,('m856pnjxcx8ivsfwt8', 'Placa de Vídeo NVIDIA RTX 3080', 'Placa de vídeo para jogos em alta resolução', 3000, false, false)
            ,('m856pnjxcx8ivsfwt9', 'Fonte Corsair 750W', 'Fonte de alimentação de alta eficiência', 400, false, false)
            ,('m856pnjxcx8ivsfwt10', 'Gabinete Cooler Master', 'Gabinete espaçoso com bom fluxo de ar', 500, false, false)
            ,('m856pnjxcx8ivsfwt11', 'Headset HyperX Cloud II', 'Headset com som surround 7.1', 350, false, false)
            ,('m856pnjxcx8ivsfwt12', 'Microfone Blue Yeti', 'Microfone USB de alta qualidade para streaming e gravação', 700, false, false)
            ,('m856pnjxcx8ivsfwt13', 'Câmera Canon EOS M50', 'Câmera mirrorless para fotos e vídeos de alta qualidade', 2500, false, false)
            ,('m856pnjxcx8ivsfwt14', 'Tripé Manfrotto', 'Tripé profissional para estabilização de câmeras', 400, false, false)
            ,('m856pnjxcx8ivsfwt15', 'Drone DJI Mavic Air 2', 'Drone com câmera 4K e controle remoto', 5000, false, false)
            ,('m856pnjxcx8ivsfwt16', 'Carregador Portátil Anker', 'Carregador portátil de alta capacidade para smartphones e tablets', 200, false, false);

        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.query(`
            DELETE FROM products WHERE id = 'productsm856pnjw6sa28b8h6';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt2';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt3';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt4';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt5';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt6';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt7';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt8';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt9';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt10';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt11';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt12';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt13';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt14';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt15';
            DELETE FROM products WHERE id = 'm856pnjxcx8ivsfwt16';
         `);
    }

}
