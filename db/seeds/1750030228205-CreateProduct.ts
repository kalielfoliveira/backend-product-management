import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProduct1750030228205 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
             INSERT INTO product (id, name, description, price, favorite, bought) 
             VALUES 
             ('1b725775-b4e0-488f-98d9-374fab6b4847', 'Livro de ANGULAR', 'Livro sobre aprendizado de código do Framework ANGULAR', 50, true, false)
            ,('1b725775-b4e0-488f-98d9-374fab6b4848', 'Mouse Razer', 'Mouse gamer com RGB e 16000 DPI', 250, false, false)
            ,('5866d82a-c610-4826-b2d7-59ec321bea28', 'Teclado Mecânico XPG', 'Teclado mecânico com iluminação RGB e switches mecânicos', 900, false, false)
            ,('d3f8c1b2-4e5a-4c6b-9f8d-3e7f8a1b2c3d', 'Monitor 4K LG', 'Monitor 4K com taxa de atualização de 144Hz', 2000, false, false)
            ,('56461440-b476-4503-ad16-358863864185', 'Cadeira Gamer DXRacer', 'Cadeira gamer ergonômica com apoio para os pés', 1500, false, false)
            ,('22339b4b-1848-4eec-9413-a3d4d14e09c1', 'Fone de Ouvido Bluetooth Sony', 'Fone de ouvido Bluetooth com cancelamento de ruído', 800, false, false)
            ,('b6e2f7c1-8e2a-4f3b-9c1e-2a1b2c3d4e5f', 'Webcam Logitech', 'Webcam Full HD com microfone embutido', 300, false, false)
            ,('c7d8e9f0-1a2b-4c3d-8e9f-0a1b2c3d4e5f', 'SSD Samsung 970 EVO', 'SSD NVMe de 1TB para alta performance', 600, false, false)
            ,('d8e9f0a1-2b3c-4d5e-9f0a-1b2c3d4e5f6a', 'Placa de Vídeo NVIDIA RTX 3080', 'Placa de vídeo para jogos em alta resolução', 3000, false, false)
            ,('e9f0a1b2-3c4d-5e6f-0a1b-2c3d4e5f6a7b', 'Fonte Corsair 750W', 'Fonte de alimentação de alta eficiência', 400, false, false)
            ,('f0a1b2c3-4d5e-6f7a-1b2c-3d4e5f6a7b8c', 'Gabinete Cooler Master', 'Gabinete espaçoso com bom fluxo de ar', 500, false, false)
            ,('a1b2c3d4-5e6f-7a8b-2c3d-4e5f6a7b8c9d', 'Headset HyperX Cloud II', 'Headset com som surround 7.1', 350, false, false)
            ,('b2c3d4e5-6f7a-8b9c-3d4e-5f6a7b8c9d0e', 'Microfone Blue Yeti', 'Microfone USB de alta qualidade para streaming e gravação', 700, false, false)
            ,('c3d4e5f6-7a8b-9c0d-4e5f-6a7b8c9d0e1f', 'Câmera Canon EOS M50', 'Câmera mirrorless para fotos e vídeos de alta qualidade', 2500, false, false)
            ,('d4e5f6a7-8b9c-0d1e-5f6a-7b8c9d0e1f2a', 'Tripé Manfrotto', 'Tripé profissional para estabilização de câmeras', 400, false, false)
            ,('e5f6a7b8-9c0d-1e2f-6a7b-8c9d0e1f2a3b', 'Drone DJI Mavic Air 2', 'Drone com câmera 4K e controle remoto', 5000, false, false)
            ,('f6a7b8c9-0d1e-2f3a-7b8c-9d0e1f2a3b4c', 'Carregador Portátil Anker', 'Carregador portátil de alta capacidade para smartphones e tablets', 200, false, false);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(`
            DELETE FROM product WHERE id = '1b725775-b4e0-488f-98d9-374fab6b4847';
            DELETE FROM product WHERE id = '1b725775-b4e0-488f-98d9-374fab6b4848';
            DELETE FROM product WHERE id = '5866d82a-c610-4826-b2d7-59ec321bea28';
            DELETE FROM product WHERE id = 'd3f8c1b2-4e5a-4c6b-9f8d-3e7f8a1b2c3d';
            DELETE FROM product WHERE id = '56461440-b476-4503-ad16-358863864185'; 
            DELETE FROM product WHERE id = '22339b4b-1848-4eec-9413-a3d4d14e09c1';
            DELETE FROM product WHERE id = 'b6e2f7c1-8e2a-4f3b-9c1e-2a1b2c3d4e5f';
            DELETE FROM product WHERE id = 'c7d8e9f0-1a2b-4c3d-8e9f-0a1b2c3d4e5f';
            DELETE FROM product WHERE id = 'd8e9f0a1-2b3c-4d5e-9f0a-1b2c3d4e5f6a';
            DELETE FROM product WHERE id = 'e9f0a1b2-3c4d-5e6f-0a1b-2c3d4e5f6a7b';
            DELETE FROM product WHERE id = 'f0a1b2c3-4d5e-6f7a-1b2c-3d4e5f6a7b8c';
            DELETE FROM product WHERE id = 'a1b2c3d4-5e6f-7a8b-2c3d-4e5f6a7b8c9d';
            DELETE FROM product WHERE id = 'b2c3d4e5-6f7a-8b9c-3d4e-5f6a7b8c9d0e';
            DELETE FROM product WHERE id = 'c3d4e5f6-7a8b-9c0d-4e5f-6a7b8c9d0e1f';
            DELETE FROM product WHERE id = 'd4e5f6a7-8b9c-0d1e-5f6a-7b8c9d0e1f2a';
            DELETE FROM product WHERE id = 'e5f6a7b8-9c0d-1e2f-6a7b-8c9d0e1f2a3b';
            DELETE FROM product WHERE id = 'f6a7b8c9-0d1e-2f3a-7b8c-9d0e1f2a3b4c';
            `);
  }
}
