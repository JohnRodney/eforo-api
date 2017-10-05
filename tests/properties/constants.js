import mocha from 'mocha';
import { assert } from 'chai';

export default function testConstants(eforo) {
  describe('Eforo: constants (property)', () => {
    it('should be initialized', () => {
      assert.ok(eforo.constants, 'constants should exist');
    });

    const { BASE_URI, ENDPOINTS, PARAMS, STATUS } = eforo.constants;
    it('should have BASE_URI', () => {
      assert.ok(BASE_URI, 'BASE_URI should exist');
    });

    it('should have ENDPOINTS', () => {
      assert.ok(ENDPOINTS, 'ENDPOINTS should exist');
    });

    it('should have PARAMS', () => {
      assert.ok(PARAMS, 'PARAMS should exist');
    });

    it('should have STATUS', () => {
      assert.ok(STATUS, 'STATUS should exist');
    });

    describe('STATUS constant', () => {
      const { IN_QUEUE, LISTED, SOLD, SHIPPED, DISCARDED } = STATUS;

      it('should have IN_QUEUE', () => {
        assert.ok(IN_QUEUE, 'IN_QUEUE should exist');
      });

      it('should have LISTED', () => {
        assert.ok(LISTED, 'LISTED should exist');
      });

      it('should have SOLD', () => {
        assert.ok(SOLD, 'SOLD should exist');
      });

      it('should have SHIPPED', () => {
        assert.ok(SHIPPED, 'SHIPPED should exist');
      });

      it('should have DISCARDED', () => {
        assert.ok(DISCARDED, 'DISCARDED should exist');
      });
    });

    describe('PARAMS constant', () => {
      const { GET_ITEMS, EBAY_LISTINGS } = PARAMS;

      describe('GET_ITEMS constant', () => {
        it('should exist', () => {
          assert.ok(GET_ITEMS, 'GET_ITEMS should exist');
        });

        const { EXTERNAL_ID, INTERNAL_ID, PAGE } = GET_ITEMS;
        const status = GET_ITEMS.STATUS;

        it('should have EXTERNAL_ID', () => {
          assert.ok(EXTERNAL_ID, 'EXTERNAL_ID should exist');
        });

        it('should have INTERNAL_ID', () => {
          assert.ok(INTERNAL_ID, 'INTERNAL_ID should exist');
        });

        it('should have PAGE', () => {
          assert.ok(PAGE, 'PAGE should exist');
        });

        it('should have STATUS', () => {
          assert.ok(status, 'STATUS should exist');
        });
      });

      describe('EBAY_LISTINGS const', () => {
        it('should exist', () => {
          assert.ok(EBAY_LISTINGS, 'EBAY_LISTINGS should exist');
        });

        const ebayKeys = [
          'EBAY_LISTING_ID', 'EBAY_LISTING_URL', 'IN_STORE_LOCATION', 'EBAY_ACCOUNT',
          'EXTERNAL_ID', 'INVENTORY_ID', 'START_DATE', 'END_DATE', 'POSTED_DATE', 'ENDED_DATE',
          'LISTING_STATUS', 'LISTING_TYPE', 'CURRENT_PRICE', 'CURRENT_BIDS', 'QUANTITY_TOTAL',
          'QUANTITY_SOLD', 'LISTED_USER', 'USERNAME', 'FULL_NAME', 'EMAIL', 'ACCESS_LEVEL',
          'STATUS',
        ];

        ebayKeys.forEach((key) => {
          it(`should have ${key}`, () => {
            assert.ok(EBAY_LISTINGS[key], `${key} should exist on EBAY_LISTINGS`);
          });
        });
      });
    });
  });
}
/*
  GET_ITEMS: {
    EXTERNAL_ID: 'external_id',
    INTERNAL_ID: 'internal_id',
    STATUS: 'status',
    PAGE: 'page',
  },
  EBAY_LISTINGS
 */
