import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { Repository, Not } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }

  async create(createProductDto: CreateProductDto) {
    await this.validateBusinessRules(createProductDto);
    const dto: any = { ...createProductDto };
    if (dto.id !== undefined) {
      dto.id = Number(dto.id);
      if (isNaN(dto.id)) {
        throw new BadRequestException('ID do produto deve ser um número válido');
      }
    }
    const product = this.productRepository.create(dto);
    return this.productRepository.save(product);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.validateBusinessRules(updateProductDto, id);
    const product = await this.findById(id);
    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.findById(id);
    await this.productRepository.remove(product);
    return {
      removed: product,
      message: 'Produto excluído com sucesso',
    };
  }


  async findAll() {
    return await this.productRepository.find();
  }

  async findById(id: string) {
    const product = await this.productRepository.findOne({
      where: { id },
    });
    if (!product) throw new NotFoundException('Produto não encontrado');
    return product;
  }

  async findOne(id: string) {
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
      throw new BadRequestException('O ID informado não é válido. Por favor, informe um UUID válido.');
    }
    const product = await this.productRepository.findOne({
      where: { id }
    });
    if (!product) throw new NotFoundException('Produto não encontrado');
    return
  }


  private async validateBusinessRules(productDto: CreateProductDto, idToIgnore?: string) {
    // Nome do produto não pode se repetir
    await this.validateProductName(productDto, idToIgnore);

    // Nome deve ter entre 3 e 100 caracteres
    this.validateProductNameLength(productDto);

    // Nome não pode conter caracteres especiais
    this.validateProductNameCharacters(productDto);

    // O ID deve ser um UUID válido
    this.validateProductId(productDto);

    // Preço do produto deve ser maior que zero
    this.validateProductPrice(productDto);

    // Preço máximo permitido
    this.validateProductPriceMaximum(productDto);

    // Descrição deve ter pelo menos 10 caracteres
    this.validateProductDescription(productDto);

    // A descrição do produto deve ser menor que 100 caractere
    this.validateProductDescriptionLength(productDto);

    // Descrição não pode conter links
    this.validateProductDescriptionNoLinks(productDto);

    // Campo "Favorito" deve ser um booleano
    this.validateProductFavorite(productDto);

    // Favorito deve ser false por padrão se não informado
    this.validateProductFavoriteDefault(productDto);

    // Campo "bought" deve ser um booleano
    this.validateProductBought(productDto);

    // Bought deve ser false por padrão se não informado
    this.validateProductBoughtDefault(productDto);
  }

  private validateProductId(productDto: CreateProductDto) {
    if (productDto.id && !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(productDto.id)) {
      throw new BadRequestException('O ID do produto deve ser um UUID válido');
    }
  }

  private async validateProductName(productDto: CreateProductDto, idToIgnore?: string) {
    // Busca produto com mesmo nome e mesmo id
    if (idToIgnore) {
      const existingProduct = await this.productRepository.findOne({
        where: { name: productDto.name, id: idToIgnore },
      });

      // Se encontrar, verifica se description e price são iguais
      if (existingProduct) {
        const isSameDescription = existingProduct.description === productDto.description;
        const isSamePrice = String(existingProduct.price) === String(productDto.price);

        // Só bloqueia se description e price também forem iguais
        if (isSameDescription && isSamePrice) {
          throw new BadRequestException('Já existe um produto com este nome, descrição e preço');
        }
        // Se pelo menos um dos campos for diferente, permite atualizar campo
        return;
      }
    }

    // Caso não seja atualização, ou seja outro produto com mesmo nome, bloqueia
    const existingProduct = await this.productRepository.findOne({
      where: { name: productDto.name },
    });
    if (existingProduct) {
      throw new BadRequestException('Já existe um produto com este nome');
    }
  }

  private validateProductNameLength(productDto: CreateProductDto) {
    if (!productDto.name || productDto.name.length < 3 || productDto.name.length > 100) {
      throw new BadRequestException('O nome do produto deve ter entre 3 e 100 caracteres');
    }
  }

  private validateProductNameCharacters(productDto: CreateProductDto) {
    if (/[^a-zA-Z0-9\sÀ-ÿ]/.test(productDto.name)) {
      throw new BadRequestException('O nome do produto não pode conter caracteres especiais');
    }
  }

  private validateProductPrice(productDto: CreateProductDto) {
    if (productDto.price <= 0) {
      throw new BadRequestException('O preço do produto deve ser maior que zero');
    }
  }

  private validateProductDescriptionLength(productDto: CreateProductDto) {
    if (productDto.description && productDto.description.length >= 100) {
      throw new BadRequestException('A descrição do produto deve ter menos de 100 caracteres');
    }
  }

  private validateProductPriceMaximum(productDto: CreateProductDto) {
    if (productDto.price > 100000) {
      throw new BadRequestException('O preço do produto não pode exceder R$ 100.000,00');
    }
  }

  private validateProductDescription(productDto: CreateProductDto) {
    if (productDto.description && productDto.description.length < 10) {
      throw new BadRequestException('A descrição do produto deve ter pelo menos 10 caracteres');
    }
  }

  private validateProductDescriptionNoLinks(productDto: CreateProductDto) {
    if (productDto.description && /(http|www\.)/.test(productDto.description)) {
      throw new BadRequestException('A descrição do produto não pode conter links');
    }
  }

  private validateProductFavorite(productDto: CreateProductDto) {
    if (typeof productDto.favorite !== 'boolean') {
      throw new BadRequestException('O campo Favorito deve ser um booleano');
    }
  }

  private validateProductFavoriteDefault(productDto: CreateProductDto) {
    if (productDto.favorite === undefined) {
      productDto.favorite = false;
    }
  }

  private validateProductBought(productDto: CreateProductDto) {
    if (typeof productDto.bought !== 'boolean') {
      throw new BadRequestException('O Checkbox do Produto deve ser um booleano');
    }
  }

  private validateProductBoughtDefault(productDto: CreateProductDto) {
    if (productDto.bought === undefined) {
      productDto.bought = false
      throw new BadRequestException('O Checkbox do Produto deve ser false por padrão se não informado');
    }
  }

 async updateBought(id: string, bought: boolean) {
  const product = await this.findById(id);
  product.bought = bought;
  return this.productRepository.save(product);
}

}
